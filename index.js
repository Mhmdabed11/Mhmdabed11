const fs = require("fs");
const axios = require("axios");
const md = require("markdown-it")({
  html: true,
  linkify: true,
  breaks: true
});

const headerIntro = "# Hi there 👋";
const headerSubIntro = "I am Mohammad Abed. I am a Front-End Engineer and a Javascript Enthusaist.";
const explanationAboutMe = "## Here is a bit about me:";
const facts = [
  "⚛️ I'm a huge React enthusaist",
  "📖 Javascript is my second language",
  "🔎 I am always looking to collaborate on opensoure projects",
  "⌛️ I probably only completed 90% of 90% of my personal projects",
  "📝 Check out my [portfolio](https://mhmdabed.dev)",
  "💻 **This README is autogenerated using Github Actions**"
];

const factsString = facts.reduce((acc, fact) => acc + `- ${fact}\n`, ``);
const ghStats = `[![My github stats](https://github-readme-stats.vercel.app/api?username=mhmdabed11)](https://github.com/anuraghazra/github-readme-stats)`;
const topLangs = `[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=mhmdabed11&layout=compact)](https://github.com/anuraghazra/github-readme-stats)`;
const githubActivityStats = `<!--START_SECTION:activity-->`;

async function getBlogPosts() {
  const posts = await axios.get("https://mhmdabed.dev/page-data/blog/page-data.json");
  let postString = "";
  posts.data.result.data.allMdx.edges.forEach(post => {
    postString =
      postString +
      `<li><a href="https://mhmdabed.dev/${post.node.frontmatter.slug}">🚀 ${post.node.frontmatter.title}</a></li>`;
  });
  return postString;
}

getBlogPosts().then(postTitles => {
  let posts = `## My Recent Blog Posts: \n ${postTitles}`;

  const content = `

  ${headerIntro}\n
  
  ${headerSubIntro}\n
  
  ${explanationAboutMe}\n
  
  ${factsString}\n

  ${githubActivityStats}\n
  
  ${ghStats}\n
  
  ${topLangs} \n

  ${posts} 
  `;

  const markdownContent = md.render(content);

  fs.writeFile("README.md", markdownContent, err => {
    if (err) {
      return console.error(err);
    }
    console.info("Writing to README");
  });
});
