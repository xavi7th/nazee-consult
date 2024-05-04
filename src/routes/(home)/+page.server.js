import { NEWS_API_KEY } from '$env/static/private';
import { log } from 'console';

/** @type {import('./$types').PageLoad} */
export async function load() {
  let news = {articles: []};
  const team = [
    {
      name: 'Dr Osazee Victor',
      position: 'Advisory Board Member',
      img: '$lib/images/team/osazee-victor-head-of-institute-nazee.png',
      profile: `
        <p>Dr victor has a decade of teaching experience in educational technology and live classroom environments in Africa and United Kingdom </p>
        <p>Victor is a dedicated educator with a deep understanding of how technology can revolutionize learning experiences.His journey is adorned with numerous certifications in leadership, human resources, and project management. </p>
        <p>He spearheads initiatives that drive organizational excellence and student success and  frameworks for implementing transformational projects.</p>
        <p>Victor is shaping the future of project management education, bridging the gap between theory and practice, and inspiring the next generation of project leaders and change makers</p>
      `
    },
    {
      name: 'I.O. Naomi ',
      position: 'Head of Programs',
      img: '$lib/images/team/igbinovia-omonua-naomi-vice-chancellor-nazee.jpg',
      profile: `
        <p>Omonua Naomi is a seasoned project management professional who is making strides in educational technology.</p>
        <p>She has a Bachelors in computer science and several other certifications in project management from reputable institutes like Google,PMI and IBM.</p>
        <p>She has half a decade experience in entrepreneurship and coaching. Her tremendous impact has earned her global recognition and partnerships.</p>
        <p>She has a dynamic vision of raising 2 million globally relevant African project managers in 2026. Her dedication to her profession continues to inspire and impact the lives of professionals.</p>
      `
    },
    {
      name: 'Miracle Ndikom',
      position: 'Community/Operations Exec.',
      img: '$lib/images/team/miracle-ndikom-head-of-operations-nazee.jpg',
      profile: `
        <p>Miracle Ndikom is a business manager and consultant, with a true passion for achieving success, She has passion for educational technology with   two Master's degrees in Public Health Biotechnology and Microbiology</p>
        <p>Through her strategic planning and implementation, she has empowered numerous businesses to scale and grow, earning her a reputation as a go-to resource for entrepreneurial growth and operational efficiency.</p>
        <p>Miracle is a catalyst for transformation. Her goal-oriented and results-driven approach to deliver value and actionable insights.</p>
      `
    },
    {
      name: 'Jennifer Zoe Ebade',
      position: 'Associate Project Manager',
      img: '$lib/images/team/jennifer-zoe-ebade-associate-project-manager-nazee.jpg',
      profile: `
        <p>She is seasoned project manager with diverse expertise. With a BSc in Environmental Biology and certifications in ITIL4, Agile Solutions Development, and Jira SCRUM project management, she bring a unique blend of expertise to her role as a Project Manager.</p>
        <p>Drawing from experience in both the agri-tech and edu tech sectors, she specializes in guiding teams towards innovative solutions while prioritizing data integrity and privacy. </p>
        <p>My track record underscores a dedication to operational efficiency and creating collaborative environments for success.</p>
      `
    },
  ]

  try {
    const res = await fetch(`https://newsapi.org/v2/everything?q=project%20manager&language=en&sortBy=publishedAt&pageSize=50&searchIn=title&excludeDomains=nlppeople.com&page=1&apiKey=${NEWS_API_KEY}`)
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
  }),
  team
 }
}

export const prerender = true;
