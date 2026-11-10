# Usa Node.js como base
FROM node:20-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo archivos de dependencias
COPY package.json package-lock.json ./

# Instala todas las dependencias para asegurar una correcta compilación
RUN npm ci

# Copia el código fuente
COPY . .

# Construye la aplicación Next.js
RUN npm run build

# Segunda fase: optimizada para producción
FROM node:20-alpine

WORKDIR /app

# Copia solo los archivos necesarios para producción
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

# Expone el puerto
EXPOSE 3000

# Comando para ejecutar en producción
CMD ["npm", "run", "start"]
