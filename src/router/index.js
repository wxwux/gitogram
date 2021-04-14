import { createRouter, createWebHashHistory } from "vue-router";
import { feed } from "../views";

const routes = [
  {
    path: "/",
    name: "Feed",
    component: feed,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
