const http = require('http');
const port = process.env.PORT || 8080;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`OK - INCO - ${new Date().toISOString()}\n`);
}).listen(port, () => console.log(`Listening on ${port}`));