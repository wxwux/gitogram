import { createRouter, createWebHashHistory } from "vue-router";
import { feeds, user } from "../views";

const routes = [
  {
    path: "/",
    name: "feed",
    component: feeds,
  },
  {
    path: "/user",
    name: "user",
    component: user,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
