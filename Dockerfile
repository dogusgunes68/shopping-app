FROM node:14
WORKDIR /app
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./src ./src
RUN npm install
RUN npm install db-migrate-pg
RUN git clone https://github.com/vishnubob/wait-for-it.git
CMD npm start
