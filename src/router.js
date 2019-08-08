import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/page",
      component: () => import("@/views/page.vue"),
      children: [
        {
          path: "/Leftnav2",
          component: () => import("@/components/Leftnav2")
        },
        {
          path: "/shop",
          component: () => import("@/components/shop")
        }
      ]
    }
  ]
})