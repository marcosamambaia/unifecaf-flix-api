// Importa a configuração de conexão com o banco
const db = require("../config/db");

/**
 * Lista todos os filmes cadastrados
 * Retorna um array com todos os registros da tabela 'filmes'
 */
exports.listarTodos = async () => {
  const [rows] = await db.query("SELECT * FROM filmes");
  return rows;
};

/**
 * Busca um filme pelo ID
 * @param {number} id - identificador único do filme
 * Retorna apenas um objeto (primeiro registro encontrado)
 */
exports.buscarPorId = async (id) => {
  const [rows] = await db.query("SELECT * FROM filmes WHERE id = ?", [id]);
  return rows[0];
};

/**
 * Filtra filmes por nome, gênero, diretor ou sinopse
 * @param {string} nome - termo de busca (parte do texto)
 * Retorna todos os registros que contenham o termo em qualquer desses campos
 */
exports.filtrarPorNome = async (nome) => {
  const [rows] = await db.query(
    "SELECT * FROM filmes WHERE titulo LIKE ? OR genero LIKE ? OR diretor LIKE ? OR sinopse LIKE ?",
    [`%${nome}%`, `%${nome}%`, `%${nome}%`, `%${nome}%`]
  );
  return rows;
};
