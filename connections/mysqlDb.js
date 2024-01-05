// db.js

const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'coderzbar.info/',
    user: 'u603640889_nodefutur',
    password: 'Coderzbar@123',
    database: 'u603640889_nodefutur'
});
// const db = mysql.createConnection({
//     host: 'coderzbar.info',
//     port: 3306, // MySQL
//     user: 'u603640889_nodefutur',
//     password: 'Coderzbar@123',
//     database: 'u603640889_nodefutur'
// });
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

module.exports = db;
