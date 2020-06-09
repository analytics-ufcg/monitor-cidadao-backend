FROM node:10-alpine

WORKDIR /app

COPY package* ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "src/app.js" ]
