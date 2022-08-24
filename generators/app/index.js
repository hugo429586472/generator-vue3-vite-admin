// 此文件作为 Generator 的核心入口
// 导入依赖 yeoman-generator
// 需要导出一个继承自 Yeoman Generator 的类型
// Yeoman Generator 在工作时会自动调用我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入

const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  // 用户输入 触发
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname,
      },
      {
        type: "input",
        name: "version",
        message: "版本号",
        default: "1.0",
      },
    ]).then((props) => {
      this.props = props;
    });
  }

  // 生成文件 触发
  writing() {
    this.fs.copy(this.templatePath("**"), this.destinationPath("./"));
    // 下面文件默认不能直接应用在新项目，需要指定复制一份
    const specFileList = [".eslintrc.json"];
    specFileList.forEach((file) => {
      this.fs.copy(this.templatePath(file), this.destinationPath(file));
    });
    // this.init_package()
  }
};
