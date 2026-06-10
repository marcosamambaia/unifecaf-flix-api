const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Rotas
const filmeRoutes = require("./src/routes/filmeRoutes");
app.use("/v1/controle-filmes", filmeRoutes);

app.get("/", (req, res) => res.send("API UniFECAF Flix rodando!"));

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
