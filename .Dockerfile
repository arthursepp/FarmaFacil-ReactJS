# Base Node
FROM node:20-alpine

# Diretório de trabalho
WORKDIR /app

# Copia apenas package* primeiro (para cache)
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o código todo
COPY . .

# Expõe a porta Vite
EXPOSE 5173

# Rodar servidor Vite acessível fora do container
CMD ["npm", "run", "dev", "--", "--host"]
