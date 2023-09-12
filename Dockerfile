FROM node:alpine
WORKDIR /app
ARG DATABASE_URL
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
EXPOSE 4001
CMD ["npm", "run", "dev"]
