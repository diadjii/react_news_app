const url =
  "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=48cf5768772c4821a64ef4a19bdfe208";

//recuperation des news sous format json
export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
