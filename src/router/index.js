import { createRouter, createWebHashHistory } from "vue-router";
import {
  feeds, user, friends, auth, stories
} from "../views";

const routes = [
  {
    path: "/",
    name: "feeds",
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
  },
  {
    path: "/auth",
    name: "auth",
    component: auth
  },
  {
    path: "/stories",
    name: "stories",
    component: stories
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
