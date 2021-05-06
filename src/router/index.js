import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // props: true
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    // props: true,
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/DestinationDetails"),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "experienceDetails" */ "../views/ExperienceDetails"
          ),
      },
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        (destination) => destination.slug == to.params.slug
      );
      if (!exists) {
        next({ name: "NotFound" });
      } else {
        next();
      }
    },
  },
  {
    path: "/user",
    name: "User",
    // props: true,
    component: () => import(/* webpackChunkName: "User" */ "../views/User"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    // props: true,
    component: () => import(/* webpackChunkName: "Login" */ "../views/Login"),
  },
  {
    path: "/invoices",
    name: "Invoices",
    // props: true,
    component: () => import(/* webpackChunkName: "Invoices" */ "../views/Invoices"),
    meta: { requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound"),
    // props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
  },
  routes,
  linkExactActiveClass: "my-active-class",
});
router.beforeEach((to, from, next) => {
  // if(to.meta.requiresAuth) {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    //  Need To Login
    if(!store.user) {
      next({
        name: 'Login'
      }) 
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router;
