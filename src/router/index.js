import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  
  // {
  //   path: "/hawaii",
  //   name: "Hawaii",
  //   component: () => import( /* webpackChunkName: "hawaii" */ "../views/Hawaii"),
  // },
  // {
  //   path: "/brazil",
  //   name: "Brazil",
  //   component: () => import( /* webpackChunkName: "brazil" */ "../views/Brazil"),
  // },
  // {
  //   path: "/panama",
  //   name: "Panama",
  //   component: () => import( /* webpackChunkName: "panama" */ "../views/Panama"),
  // },
  // {
  //   path: "/jamaica",
  //   name: "Jamaica",
  //   component: () => import( /* webpackChunkName: "jamaica" */ "../views/Jamaica"),
  // },
  {
    path: "/details/:id",
    name: "DestinationDetails",
    component: () => import( /* webpackChunkName: "details" */ "../views/DestinationDetails"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "my-active-class",
});

export default router;
