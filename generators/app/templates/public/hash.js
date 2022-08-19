self.importScripts("./../node_modules/spark-md5/spark-md5.min.js");

/*
在 worker 线程中，接受文件切片 chunkFileList，利用 FileReader 读取每个切片的 ArrayBuffer 并不断传入 spark-md5 中，每计算完一个切片通过 postMessage 向主线程发送一个进度事件，全部完成后将最终的 hash 发送给主线程
spark-md5 需要根据所有切片才能算出一个 hash 值，不能直接将整个文件放入计算，否则即使不同文件也会有相同的 hash，具体可以看官方文档
*/
self.onmessage = (e) => {
  const { chunkFileList } = e.data;
  const spark = new self.SparkMD5.ArrayBuffer();
  let percentage = 0;
  let count = 0;

  const loadNext = (index) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(chunkFileList[index].file);
    reader.onload = (e) => {
      count++;
      spark.append(e.target.result);
      if (count === chunkFileList.length) {
        self.postMessage({
          percentage: 100,
          hash: spark.end(),
        });
        self.close();
      } else {
        percentage += 100 / chunkFileList.length;
        self.postMessage({
          percentage,
        });
      }
      // 递归计算下一个切片
      loadNext(count);
    };
  };
  loadNext(0);
};
