import { createRouter, createWebHashHistory } from "vue-router";
import { feeds, user, friends } from "../views";

console.log("friends", friends);

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
  {
    path: "/friends",
    name: "friends",
    component: friends
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
