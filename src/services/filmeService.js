const db = require("../config/db");

exports.listarTodos = async () => {
  const [rows] = await db.query("SELECT * FROM filmes");
  return rows;
};

exports.buscarPorId = async (id) => {
  const [rows] = await db.query("SELECT * FROM filmes WHERE id = ?", [id]);
  return rows[0];
};

exports.filtrarPorNome = async (nome) => {
  const [rows] = await db.query(
    "SELECT * FROM filmes WHERE titulo LIKE ? OR sinopse LIKE ?",
    [`%${nome}%`, `%${nome}%`]
  );
  return rows;
};
