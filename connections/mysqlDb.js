// db.js

const mysql = require('mysql');
 
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
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
