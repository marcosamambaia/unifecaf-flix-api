const filmeService = require("../services/filmeService");

exports.listarTodos = async (req, res) => {
  try {
    const filmes = await filmeService.listarTodos();
    res.status(200).json(filmes);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao listar filmes." });
  }
};

exports.buscarPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const filme = await filmeService.buscarPorId(Number(id));
    if (!filme) return res.status(404).json({ mensagem: "Filme não encontrado." });
    res.status(200).json(filme);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar filme." });
  }
};

exports.filtrarPorNome = async (req, res) => {
  try {
    const { nome } = req.query;
    const filmes = await filmeService.filtrarPorNome(nome);
    res.status(200).json(filmes);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao filtrar filmes." });
  }
};
