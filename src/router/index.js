import { createRouter, createWebHistory } from "vue-router";

import home from "../views/homePage.vue";
import InteriorDesign from "../views/InteriorDesign.vue";
import imgSlider from "../views/imgSlider.vue";

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
  {
    path: "/img",
    name: "imgSlider",
    component: imgSlider,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
