// db.js

const mysql = require('mysql');

// const db = mysql.createConnection({
//     host: 'https://coderzbar.info/',
//     user: 'u603640889_nodefutur',
//     password: 'Coderzbar@123',
//     database: 'u603640889_nodefutur'
// });
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeapp'
});
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

module.exports = db;
