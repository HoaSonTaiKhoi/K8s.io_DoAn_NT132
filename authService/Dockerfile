FROM node:18.18-alpine AS build

RUN mkdir -p home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app
COPY . .

RUN npm cache clean --force && npm install
COPY --chown=node:node . .

EXPOSE 8800
CMD [ "node", "index.js" ]

