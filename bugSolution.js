const http = require('http');

const isPortAvailable = (port) => {
  return new Promise((resolve, reject) => {
    const server = http.createServer();
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(false);
      } else {
        reject(err);
      }
    });
    server.once('listening', () => {
      server.close();
      resolve(true);
    });
    server.listen(port);
  });
};

async function startServer(port) {
  const isAvailable = await isPortAvailable(port);
  if(isAvailable) {
    const requestListener = function (req, res) {
      res.writeHead(200);
      res.end('Hello, World!');
    };

    const server = http.createServer(requestListener);

    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } else {
    console.error(`Port ${port} is already in use.`);
  }
}
startServer(8080); 