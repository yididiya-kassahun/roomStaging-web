import { createRouter, createWebHistory } from "vue-router";

import home from "../views/homePage.vue";
import InteriorDesign from "../views/InteriorDesign.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/design",
    name: "InteriorDesign",
    component: InteriorDesign,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
