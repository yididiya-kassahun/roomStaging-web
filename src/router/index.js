import { createRouter, createWebHistory } from "vue-router";

import home from "../views/homePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
