const http = require("http");
const fs = require("fs");
// analyzing url
const url = require("url");
const replaceTemplate = require("./modules/replaceTemplate");

const homePage = fs.readFileSync(`${__dirname}/templates/index.html`, "utf-8");

const paintingHolder = fs.readFileSync(
  `${__dirname}/templates/painting_cards.html`,
  "utf-8"
);

const descriptionPage = fs.readFileSync(
  `${__dirname}/templates/description_card.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");

const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  //   main page
  if (pathname === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    const artCards = dataObject
      .map((el) => replaceTemplate(paintingHolder, el))
      .join("");
    const output = homePage.replace("{%PAINTING_CARDS%}", artCards);
    res.end(output);
  } else if (pathname === "/painting") {
    res.writeHead(200, { "Content-type": "text/html" });
    const painting = dataObject[query.id];
    const output = replaceTemplate(descriptionPage, painting);
    res.end(output);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log("Listening to requests on port 8000");
});
