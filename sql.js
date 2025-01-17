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