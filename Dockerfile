FROM node:16
# Define o diretório de trabalho
WORKDIR /app
# Copia o package.json
COPY package.json ./
RUN npm install
# Copia o código da aplicação
COPY . .
# Run the build step
RUN npm run build 
# Expomos uma porta
EXPOSE 3001
# Comando para iniciar o serviço
CMD ["npm", "start"]