import { defineStore } from "pinia";
// import { store } from "@/store";
import { MENUS_KEY, TOKEN_KEY, USER_INFO_KEY } from "@/enums/cacheEnum";
import { getItem, setItem } from "@/utils/storage";

import { axios } from "@/apis";

interface UserState {
  userInfo: any;
  token?: string;
  roleList: any[];
  menuList: any[];
  // sessionTimeout?: boolean;
  // lastUpdateTime: number;
}

export const useUserStore = defineStore({
  id: "app-user",
  state: (): UserState => ({
    userInfo: null,
    token: undefined,
    roleList: [],
    menuList: [],
  }),
  getters: {
    getUserInfo(): any {
      // return this.userInfo || getItem(USER_INFO_KEY)
      return getItem(USER_INFO_KEY);
    },
    getToken(): any {
      // return this.token || getItem(TOKEN_KEY)
      return getItem(TOKEN_KEY);
    },
    getMenus(): any {
      return getItem(MENUS_KEY);
      // return this.menuList || getItem(MENUS_KEY)
    },
  },
  actions: {
    setToken(info: string) {
      this.token = info ? info : "";
      setItem(TOKEN_KEY, info);
    },
    setUserInfo(info: any) {
      this.userInfo = info;
      // this.lastUpdateTime = new Date().getTime();
      setItem(USER_INFO_KEY, info);
    },
    setMenuList(menuList: []) {
      this.menuList = menuList;
      setItem(MENUS_KEY, menuList);
    },
    async login(params: any) {
      try {
        const { goHome = true, mode, ...loginParams } = params;
        const res = await axios.fetch("user.login", {
          username: "admin",
          password: "admin",
          mode,
          ...loginParams,
        });
        const { token } = res.data.result;
        // save token
        this.setToken(token);
        this.setUserInfo(res.data.result);
        this.afterLoginAction(goHome);
        return res.data.result;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async afterLoginAction(goHome?: boolean) {
      try {
        const res = await axios.fetch("user.menu_list", {
          goHome,
        });
        this.setMenuList(res.data.result);
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
});
