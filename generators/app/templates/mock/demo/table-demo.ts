import { resultPageSuccess } from "../_util";

const demoList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      name: "John Brown",
      age: `1${index}`,
      no: `${index + 10}`,
      address: "New York No. 1 Lake ParkNew York No. 1 Lake Park",
      beginTime: new Date().toLocaleString(),
      endTime: new Date().toLocaleString(),
    });
  }
  return result;
})();

export default [
  {
    url: "/basic-api/table/getDemoList",
    timeout: 100,
    method: "get",
    response: ({ query }) => {
      const { current = 1, pageSize = 20 } = query;
      return resultPageSuccess(current, pageSize, demoList);
    },
  },
];
