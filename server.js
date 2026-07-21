const http = require('http');
const fs = require('fs');
const path = require('path');

// Azure sets PORT automatically for Linux App Service — don't hardcode a port.
const PORT = process.env.PORT || 8080;
const indexPath = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  fs.readFile(indexPath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Could not load index.html');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Stoep to Plate site running on port ${PORT}`);
});
