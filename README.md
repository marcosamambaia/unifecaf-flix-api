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

-----------------------------------------------------------
COMO RODAR O PROJETO
-----------------------------------------------------------

Pré-requisitos:
- Docker e Docker Compose instalados
- Node.js instalado (para rodar o backend fora do Docker)

Passos:
1. Clone o repositório:
   $ git clone https://github.com/marcosamambaia/unifecaf-flix-api.git
   $ cd unifecaf-flix-api

2. Suba os containers:
   $ sudo docker-compose up -d

3. Acesse a API em:
   http://localhost:3000

4. Banco de dados disponível em:
   host: localhost
   port: 3307
   user: unifecaf
   password: senha123
   database: unifecaf_flix
   root user: root
   root password: root123

5. Para iniciar o backend fora do Docker:
   $ npm run dev

-----------------------------------------------------------
ENDPOINTS PRINCIPAIS
-----------------------------------------------------------
- GET /v1/controle-filmes/filme
    -> lista todos os filmes

- GET /v1/controle-filmes/filme/:id
    -> busca um filme pelo ID

- GET /v1/controle-filmes/filtro/filme?nome=xxx
    -> filtra filmes por nome ou sinopse

-----------------------------------------------------------
GUIA DE INICIALIZAÇÃO COM DOCKER
-----------------------------------------------------------

1. Subir os containers após reiniciar a máquina:
   $ cd ~/Área\ de\ trabalho/BackEnd/unifecaf-flix-api
   $ sudo docker-compose up -d

2. Verificar se os containers estão rodando:
   $ sudo docker ps

   Exemplo de saída esperada:
   CONTAINER ID   IMAGE         STATUS       PORTS
   abcd1234       mysql:8.0     Up           0.0.0.0:3307->3306/tcp
   efgh5678       backend_img   Up           0.0.0.0:3000->3000/tcp

3. Testar a API:
   $ curl http://localhost:3000/v1/controle-filmes/filme
   $ curl http://localhost:3000/v1/controle-filmes/filme/1
   $ curl "http://localhost:3000/v1/controle-filmes/filtro/filme?nome=Matrix"

4. Persistência dos dados:
   - O banco usa o volume "mysql_data".
   - Os dados NÃO são apagados ao reiniciar.
   - Só serão removidos se você executar:
     $ sudo docker-compose down -v

5. Parar os containers manualmente:
   $ sudo docker-compose down

-----------------------------------------------------------
DICA
-----------------------------------------------------------
Se quiser que os serviços iniciem automaticamente ao ligar
a máquina, configure o Docker Compose como serviço do
sistema (systemd).

-----------------------------------------------------------
AUTOR
-----------------------------------------------------------
Marco Samambaia
GitHub: https://github.com/marcosamambaia


sudo systemctl stop docker.socket
sudo systemctl stop docker
sudo rm -f /var/run/docker.sock
sudo systemctl start docker
