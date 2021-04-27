import { makeRequest } from "../requests";

// curl -G https://api.github.com/search/repositories --data-urlencode "sort=stars" --data-urlencode "order=desc" --data-urlencode "q=language:java"  --data-urlencode "q=created:>`date -v-7d '+%Y-%m-%d'`"

export const getTrendings = (lang = "javascript", period = "weekly") => {
  const params = new URLSearchParams();

  params.append("sort", "stars");
  params.append("order", "desc");
  params.append("q", "language:javascript created:>2021-04-20");
  params.append("per_page", 10);

  return makeRequest({
    url: `/search/repositories?${params}`
  });
};
