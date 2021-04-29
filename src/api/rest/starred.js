import { makeRequest } from "../requests";

export const getStarredRepos = () => {
  const params = new URLSearchParams();
  params.append("per_page", 10);

  return makeRequest({
    url: `/user/starred?${params}`
  });
};

export const starRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: "put"
});
