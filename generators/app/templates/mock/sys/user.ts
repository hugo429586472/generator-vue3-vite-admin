import { resultError, resultSuccess } from "../_util";

export function createFakeUserList() {
  return [
    {
      userId: "1",
      username: "admin",
      realName: "admin",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640",
      desc: "manager",
      password: "123456",
      token: "fakeToken1",
      homePath: "/dashboard/analysis",
      roles: [
        {
          roleName: "Super Admin",
          value: "super",
        },
      ],
    },
    {
      userId: "2",
      username: "test",
      password: "123456",
      realName: "test user",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640",
      desc: "tester",
      token: "fakeToken2",
      homePath: "/dashboard/workbench",
      roles: [
        {
          roleName: "Tester",
          value: "test",
        },
      ],
    },
  ];
}

export default [
  {
    url: "/basic-api/login",
    timeout: 200,
    method: "post",
    // statusCode: 500,
    response: ({ body }) => {
      const { username, password } = body;
      const checkUser = createFakeUserList().find(
        (item) => item.username === username && password === item.password
      );
      if (!checkUser) {
        return resultError("Incorrect account or password！");
      }
      const {
        userId,
        username: _username,
        token,
        realName,
        desc,
        roles,
      } = checkUser;
      return resultSuccess({
        roles,
        userId,
        username: _username,
        token,
        realName,
        desc,
      });
    },
  },
  {
    url: "/basic-api/getToken",
    method: "post",
    response: () => {
      return resultSuccess({ token: "123456" });
    },
  },
  {
    url: "/basic-api/getUserInfo",
    method: "post",
    rawResponse: async (req, res) => {
      // let reqbody = "";
      await new Promise((resolve) => {
        req.on("data", () => {
          // reqbody += chunk;
        });
        req.on("end", () => resolve(undefined));
      });
      res.setHeader("Content-Type", "application/json");

      res.statusCode = req.headers.authorization ? 200 : 401;
      res.end(JSON.stringify(resultSuccess({ username: "cherry", age: 18 })));
    },
  },
];
