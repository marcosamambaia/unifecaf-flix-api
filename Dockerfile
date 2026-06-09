# Usar imagem oficial Node.js
FROM node:20

# Criar diretório de trabalho
WORKDIR /app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar código da aplicação
COPY . .

# Expor porta da API
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "run", "dev"]
