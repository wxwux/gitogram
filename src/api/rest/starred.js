import { makeRequest } from "../requests";

const baseURL = "https://api.github.com";

export const getStarredRepos = () => makeRequest({
  url: `${baseURL}/user/following`
});
