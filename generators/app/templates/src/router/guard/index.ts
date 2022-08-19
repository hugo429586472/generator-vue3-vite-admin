import type { Router } from "vue-router";
import { useUserStore } from "@/store/modules/user";

export const setupRouterGuard = (router: Router) => {
  createPageGuard(router);
};

const createPageGuard = (router: Router) => {
  const useStore = useUserStore();
  const token = useStore.getToken;

  router.beforeEach(async (to, from, next) => {
    if (!token && to.name !== "Login") {
      next({ name: "Login" });
    } else {
      next();
    }
    // if(token){
    //   if(to.name === 'Login'){
    //     next('/')
    //   }else{
    //     next()
    //   }
    // }else if(to.name !== 'Login'){
    //   next({name: 'Login'})
    // }
  });
};
