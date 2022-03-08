const http = require('http');
var sql = require("mssql");

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.send("ok");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

var Connection = require('tedious').Connection;  
var config = {  
    server: 'DB_URL',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'DB_USER', //update me
            password: 'DB_PASS'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'DB_NAME'  //update me
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});

connection.connect();