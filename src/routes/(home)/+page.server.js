import { NEWS_API_KEY } from '$env/static/private';
import { log } from 'console';

/** @type {import('./$types').PageLoad} */
export async function load() {
  let news = {articles: []};

  try {
    const res = await fetch(`https://newsapi.org/v2/everything?q=project%20manager&language=en&sortBy=publishedAt&pageSize=3&searchIn=title&excludeDomains=nlppeople.com&page=${Math.floor(Math.random() * 6) + 1}&apiKey=${NEWS_API_KEY}`)
    news = await res.json();
  } catch (e) {
    log(e);
  }

 return {
  news: news.articles.map((/** @type {{ source: { name: any; }; urlToImage: any; description: any; url: any; title: any; publishedAt: any; }} */ article) => {
    return {
      author: article.source.name,
      img: article.urlToImage,
      description: article.description,
      url: article.url,
      title: article.title,
      date: article.publishedAt
    }
  })
 }
}
