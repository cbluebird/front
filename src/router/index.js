import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import('@/views/login/login'),
  },
  {
    path: "/user/Home",
    name: "Home",
    component: () => import('@/views/Home'),
  },
  {
    path: "/register",
    name: "register",
    component: () => import('@/views/login/register'),
  },
  {
    path: "/repassword",
    name: "repassword",
    component: () => import('@/views/login/repassword'),
  },
  {
    path: "/user",
    name: "user",
    component: () => import('@/components/user'),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
