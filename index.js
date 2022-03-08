const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    // response.end("Testing Action v2");
    response.end(process.env.DB_URL);
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);


// const { Connection, Request } = require("tedious");

// Create connection to database
// const config = {
//   authentication: {
//     options: {
//       userName: process.env.DB_USER,
//       password: process.env.DB_PASS
//     },
//     type: "default"
//   },
//   server:  process.env.DB_URL,
//   options: {
//     database: process.env.DB_NAME,
//     encrypt: true,
//     port: 1433
//   }
// };

// const connection = new Connection(config);

// // Attempt to connect and execute queries if connection goes through
// connection.on("connect", err => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log('connected');
//   }
// });

// connection.connect();