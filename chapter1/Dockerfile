FROM node:lts-alpine

WORKDIR /app

copy package.json .

RUN npm install

copy . .

CMD ["node", "index.js"]