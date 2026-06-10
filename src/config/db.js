const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",   // ou "mysql" se rodar dentro do Docker
  user: "unifecaf",
  password: "senha123",
  database: "unifecaf_flix",
  port: 3307           // se rodar fora do Docker
});

module.exports = pool;
