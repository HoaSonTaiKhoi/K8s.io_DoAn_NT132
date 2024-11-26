FROM node:18.18-alpine AS build

WORKDIR /app

COPY package*.json yarn.lock ./ 
RUN yarn cache clean && yarn install

COPY . .

RUN yarn build

FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]