===========================================================
                 UniFECAF Flix API
===========================================================

API desenvolvida para o projeto UniFECAF Flix, responsável
por gerenciar filmes, categorias e diretores.

-----------------------------------------------------------
TECNOLOGIAS UTILIZADAS
-----------------------------------------------------------
- Node.js
- Express
- Prisma ORM
- MySQL
- Docker e Docker Compose

===========================================
     VERIFICAÇÃO DOS REQUISITOS DO PROJETO
===========================================

✔ Organização do projeto segundo o padrão MVC
   - Controllers, Services e Config separados
   - Rotas bem definidas e modulares

✔ Adoção do padrão REST e uso correto dos status HTTP
   - 200 para sucesso
   - 404 para não encontrado
   - 500 para erros internos

✔ Desenvolvimento em Node.js
   - Estrutura modular
   - Execução via npm run dev

✔ Uso de banco de dados MySQL
   - Conexão configurada em db.js
   - Queries SQL funcionando (SELECT, UPDATE, INSERT)

✔ Inserção dos dados conforme script SQL disponibilizado
   - Filmes populados na tabela
   - Sinopses adicionadas para enriquecer os registros

✔ Código organizado, bem documentado e funcional
   - Funções comentadas
   - Estrutura clara e fácil manutenção
   - Testes realizados no Postman com sucesso

===========================================
   RESULTADO: TODOS OS REQUISITOS ATENDIDOS
===========================================

-----------------------------------------------------------
COMO RODAR O PROJETO
-----------------------------------------------------------

Pré-requisitos:
- Docker e Docker Compose instalados
- Node.js instalado (para rodar o backend fora do Docker)

Passos:
1. Clone o repositório:
   ```
   $ git clone https://github.com/marcosamambaia/unifecaf-flix-api.git
   $ cd unifecaf-flix-api
   ```
3. Suba os containers:
   ```
   $ sudo docker-compose up -d
   ```
5. Acesse a API em:
   ```
   http://localhost:3000
   ```

6. Banco de dados disponível em:
 ```
   host: localhost
   port: 3307
   user: unifecaf
   password: senha123
   database: unifecaf_flix
   root user: root
   root password: root123
 ```

8. Para iniciar o backend fora do Docker:
   ```
   $ npm run dev
   ```

-----------------------------------------------------------
ENDPOINTS PRINCIPAIS
-----------------------------------------------------------
```
- GET /v1/controle-filmes/filme
    -> lista todos os filmes

- GET /v1/controle-filmes/filme/:id
    -> busca um filme pelo ID

- GET /v1/controle-filmes/filtro/filme?nome=xxx
    -> filtra filmes por nome ou sinopse
```

===========================================
        TESTES DA API - UniFECAF Flix
===========================================

1) LISTAR TODOS OS FILMES
-------------------------------------------
Método: GET
URL:
```
http://localhost:3000/v1/controle-filmes/filme
```
Exemplo de retorno esperado:
```
[
  {
    "id": 1,
    "titulo": "Matrix",
    "diretor": "Wachowski",
    "ano": 1999,
    "genero": "Ficção Científica",
    "sinopse": "Um hacker descobre que vive em uma realidade simulada..."
  },
  ...
]
```
-------------------------------------------

2) BUSCAR FILME POR ID
-------------------------------------------
Método: GET
URL:
```
http://localhost:3000/v1/controle-filmes/filme/3
```
Exemplo de retorno esperado:
```
{
  "id": 3,
  "titulo": "Cidade de Deus",
  "diretor": "Fernando Meirelles",
  "ano": 2002,
  "genero": "Drama",
  "sinopse": "A ascensão do crime organizado em uma favela do Rio..."
}
```
-------------------------------------------

3) FILTRAR FILMES POR NOME OU SINOPSE
-------------------------------------------
Método: GET
URL: 
```
http://localhost:3000/v1/controle-filmes/filtro/filme?nome=Matrix
```
Exemplo de retorno esperado:
```
[
  {
    "id": 1,
    "titulo": "Matrix",
    "diretor": "Wachowski",
    "ano": 1999,
    "genero": "Ficção Científica",
    "sinopse": "Um hacker descobre que vive em uma realidade simulada..."
  }
]
```
Outro exemplo:
URL:
```
http://localhost:3000/v1/controle-filmes/filtro/filme?nome=realidade
```
--> Deve retornar o filme Matrix, pois a palavra aparece na sinopse.

-------------------------------------------

STATUS HTTP ESPERADOS
-------------------------------------------
```
200 - Sucesso (dados retornados)
404 - Filme não encontrado (quando busca por ID inexistente)
500 - Erro interno (quando há problema na query ou no servidor)
```

===========================================

===========================================
        AMBIENTE DE DESENVOLVIMENTO
===========================================

✔ Projeto desenvolvido em Debian 13
✔ Banco de dados MySQL rodando em Docker
✔ API construída em Node.js seguindo padrão MVC

===========================================
        DICA DE TROUBLESHOOTING
===========================================

Em alguns casos, pode ocorrer erro de socket no Docker.
Para corrigir, utilize os seguintes comandos:
```
sudo systemctl stop docker.socket
sudo systemctl stop docker
sudo rm -f /var/run/docker.sock
sudo systemctl start docker
```
-------------------------------------------
Esses comandos reiniciam o serviço Docker e 
removem o socket corrompido, permitindo que 
o container do MySQL volte a funcionar.
===========================================
