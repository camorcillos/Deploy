# Utiliza una imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY package*.json ./
COPY index.js ./

# Instala las dependencias del proyecto
RUN npm install

# Expone el puerto 3000 en el contenedor
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]
