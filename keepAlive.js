const fetch = require("node-fetch");
const http = require("http");
const { serverSite } = main;

http.createServer((req, res) => {
  res.writeHead(200);
  res.write("OK");
  res.end();
}).listen(process.env.PORT);

setInterval(() => {
  fetch(serverSite)
}, 1000 * 60 * 3);
