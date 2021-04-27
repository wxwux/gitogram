import { makeRequest } from "../requests";

const baseURL = "https://api.github.com";

// trending repos
// https://trendings.herokuapp.com/repo?lang=java&since=weekly

export const getUser = () => makeRequest({
  url: `${baseURL}/user/following`
});
