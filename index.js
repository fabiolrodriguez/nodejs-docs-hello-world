// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Testing connection");
// });

// const port = process.env.PORT || 1337;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);


// var express = require('express');
// var app = express();

// app.get('*',function(req,res){

//   res.send("OK");

// });


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


    // Import the mssql package

    // var sql = require("mssql");

    // // Create a configuration object for our Azure SQL connection parameters
    // var dbConfig = {
    // server: "DB_URL", // Use your SQL server name
    // database: "DB_NAME", // Database to connect to
    // user: "DB_USER", // Use your username
    // password: "DB_PASS", // Use your password
    // port: 1433,
    // // Since we're on Windows Azure, we need to set the following options
    // options: {
    //       encrypt: true
    //   }
    // };

    // // This function connects to a SQL server, executes a SELECT statement,
    // // and displays the results in the console.
    // function getCustomers() {
    // // Create connection instance
    // var conn = new sql.Connection(dbConfig);

    // conn.connect()
    // // Successfull connection
    // .then(function () {

    //   // Create request instance, passing in connection instance
    //   var req = new sql.Request(conn);

    //   // Call mssql's query method passing in params
    //   req.query("SELECT * FROM customers")
    //   .then(function (recordset) {
    //     res.send(recordset);
    //     conn.close();
    //   })
    //   // Handle sql statement execution errors
    //   .catch(function (err) {
    //     res.send(err);
    //     conn.close();
    //   })

    // })
    // // Handle connection errors
    // .catch(function (err) {
    //   console.log(err);
    //   conn.close();
    // });
    // }

    // getCustomers();

