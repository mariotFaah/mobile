// config/db.js
const mysql = require('mysql2/promise'); // Version promisifiée

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'admin',
  password: 'mot_de_passe',
  database: 'hotel_management',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;
