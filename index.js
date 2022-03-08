// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Testing connection");
// });

// const port = process.env.PORT || 1337;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);

const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "DB_USER", // update me
      password: "DB_PASS" // update me
    },
    type: "default"
  },
  server: "DB_URL", // update me
  options: {
    database: "DB_NAME", //update me
    encrypt: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

connection.connect();

function queryDatabase() {
  console.log("Creating table");

  // Read all rows from table
  const request = new Request(
    ` DROP TABLE IF EXISTS inventory;
    CREATE TABLE inventory;`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  connection.execSql(request);
}
