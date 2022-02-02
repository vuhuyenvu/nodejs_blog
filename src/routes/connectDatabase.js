const mysql = require('mysql');
class connectDatabase {
    cnDB() {
        var con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'mydb',
        });

        con.connect(function (err) {
            if (err) throw err;
            console.log('Connected!');
            /*Create a table named "customers":*/
            var sql =
                'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))';
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log('Table created');
            });
        });
    }
}
module.exports = new connectDatabase();
