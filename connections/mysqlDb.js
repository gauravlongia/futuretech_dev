// db.js

const mysql = require('mysql');
 
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});
// const db = mysql.createConnection({
//     host: 'coderzbar.info', 
//     user: 'u603640889_nodefutur',
//     password: 'Coderzbar@123',
//     database: 'u603640889_nodefutur'
// }); 
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

module.exports = db;
