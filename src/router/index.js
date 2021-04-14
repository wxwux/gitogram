import { createRouter, createWebHashHistory } from "vue-router";
import { feeds } from "../views";

const routes = [
  {
    path: "/",
    name: "Feed",
    component: feeds,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
