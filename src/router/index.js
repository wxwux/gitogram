import { createRouter, createWebHashHistory } from "vue-router";
import {
  feeds, user, auth, stories, repos, following
} from "../views";
import * as api from "../api";

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

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === "auth";

  try {
    await api.user.getUserData();
    next(authRoute ? { name: "feeds" } : null);
  } catch (e) {
    next(authRoute ? null : { name: "auth" });
  }
});

export default router;
