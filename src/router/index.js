import { createRouter, createWebHashHistory } from "vue-router";
import {
  feeds, user, auth, stories, repos, following
} from "../views";

const routes = [
  {
    path: "/",
    name: "feeds",
    component: feeds,
  },
  {
    path: "/user",
    component: user,
    children: [{
      path: "",
      component: repos,
      name: "user",
      props: {
        pageTitle: "Repositories"
      }
    }, {
      path: "following",
      component: following,
      name: "following",
      props: {
        pageTitle: "Following"
      }
    }]
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
