const mysql = require('mysql');

async function connect() {
        var con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'mydb',
        });

        con.connect(function (err) {
            if (err) throw err;
            console.log('Connected!');

        });
    }

module.exports = {connect};
