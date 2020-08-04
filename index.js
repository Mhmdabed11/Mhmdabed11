const fs = require("fs");
const md = require("markdown-it")({
  html: true,
  linkify: true,
  breaks: true
});

const headerIntro = "# Hi there 👋";
const headerSubIntro =
  "## I am Mohammad Abed. I am a Front-End Engineer and a Javascript Enthusaist.";
const explanationAboutMe = "Here is a bit about me:";
const facts = [
  "I'm a huge React enthusaist",
  "Javascript is my second language",
  "I am always looking to collaborate on opensoure projects",
  "I probably only completed 90% of 90% of my personal projects",
  "Check out my [portfolio](https://mhmdabed.dev)"
];

const factsString = facts.reduce((acc, fact) => acc + `- ${fact}\n`, ``);
const ghStats = `[![My github stats](https://github-readme-stats.vercel.app/api?username=mhmdabed11)](https://github.com/anuraghazra/github-readme-stats)`;
const topLangs = `[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=mhmdabed11&layout=compact)](https://github.com/anuraghazra/github-readme-stats)`;

const content = `

${headerIntro}\n

${headerSubIntro}\n

${explanationAboutMe}\n

${factsString}\n

${ghStats}\n

${topLangs}
`;

const markdownContent = md.render(content);

fs.writeFile("README.md", markdownContent, err => {
  if (err) {
    return console.error(err);
  }
  console.info("Writing to README");
});
