const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    // Import the mssql package

    var sql = require("mssql");

    // Create a configuration object for our Azure SQL connection parameters
    var dbConfig = {
    server: "DB_URL", // Use your SQL server name
    database: "DB_NAME", // Database to connect to
    user: "DB_USER", // Use your username
    password: "DB_PASS", // Use your password
    port: 1433,
    // Since we're on Windows Azure, we need to set the following options
    options: {
          encrypt: true
      }
    };

    // This function connects to a SQL server, executes a SELECT statement,
    // and displays the results in the console.
    function getCustomers() {
    // Create connection instance
    var conn = new sql.Connection(dbConfig);

    conn.connect()
    // Successfull connection
    .then(function () {

      // Create request instance, passing in connection instance
      var req = new sql.Request(conn);

      // Call mssql's query method passing in params
      req.query("SELECT * FROM customers")
      .then(function (recordset) {
        response.send(recordset);
        conn.close();
      })
      // Handle sql statement execution errors
      .catch(function (err) {
        response.send(err);
        conn.close();
      })

    })
    // Handle connection errors
    .catch(function (err) {
      response.send(err);
      conn.close();
    });
    }

    getCustomers();
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);