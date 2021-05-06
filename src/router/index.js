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
    component: () => import( /* webpackChunkName: "details" */ "../views/DestinationDetails"),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () => import( /* webpackChunkName: "experienceDetails" */ "../views/ExperienceDetails"),
      },
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        destination => destination.slug == to.params.slug
      )
      if(!exists) {
        next({ name: 'NotFound'})
      } else {
        next()
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: "NotFound",
    component: () => import( /* webpackChunkName: "NotFound" */ "../views/NotFound"),
    // props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else {
      const position = {}
      if(to.hash) {
        position.selector = to.hash
        if(document.querySelector(to.hash)) {
          return position
        }
        return false
      }

    }
  },
  routes,
  linkExactActiveClass: "my-active-class",
});

router.beforeEach((to, from, next) => {})
export default router;
