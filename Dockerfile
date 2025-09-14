ARG TAG="slim"
FROM node:${TAG}

WORKDIR /tmp/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "server.js" ]

