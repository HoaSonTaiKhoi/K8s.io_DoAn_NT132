##### Dockerfile #####
FROM node:18.18-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node . .
RUN npm cache clean --force && npm install
EXPOSE 8800
CMD [ "node", "index.js" ]