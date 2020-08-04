const fs = require("fs");
const md = require("markdown-it")({
  html: true,
  linkify: true,
  breaks: true
});

const headerIntro = "# Hi there 👋";
const markdownContent = md.render(headerIntro);

fs.writeFile("README.md", markdownContent, err => {
  if (err) {
    return console.error(err);
  }
  console.info("Writing to README");
});
