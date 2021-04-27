import { makeRequest } from "../requests";

export const getTrendings = (lang = "javascript", period = "weekly") => {
  const params = new URLSearchParams();

  params.append("sort", "stars");
  params.append("order", "desc");
  params.append("q", `language:${lang} created:>2021-04-20`);
  params.append("per_page", 10);

  return makeRequest({
    url: `/search/repositories?${params}`
  });
};
