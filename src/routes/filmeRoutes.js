const express = require("express");
const router = express.Router();
const filmeController = require("../controller/filmeController");



// Endpoints REST
router.get("/filme", filmeController.listarTodos);
router.get("/filme/:id", filmeController.buscarPorId);
router.get("/filtro/filme", filmeController.filtrarPorNome);

module.exports = router;
