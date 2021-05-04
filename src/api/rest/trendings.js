import { makeRequest } from "../requests";

const addStaringZero = (value) => (value < 10 ? `0${value}` : value);

export const getTrendings = (lang = "javascript", period = "weekly") => {
  const params = new URLSearchParams();
  const weekS = 7 * 24 * 60 * 60 * 1000;
  const weekAgo = new Date(Date.now() - weekS);

  const formattedDate = [
    weekAgo.getFullYear(),
    addStaringZero(weekAgo.getMonth() + 1),
    addStaringZero(weekAgo.getDate())
  ].join("-");

  params.append("order", "desc");
  params.append("sort", "stars");
  params.append("q", `language:${lang} created:>${formattedDate}`);
  params.append("per_page", 10);

  return makeRequest({
    url: `/search/repositories?${params}`
  });
};
