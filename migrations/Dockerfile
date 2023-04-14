FROM node:14.17.3-alpine3.14

WORKDIR /usr/src/migrate

COPY package.json package-lock.json ./
RUN npm i
COPY . .

CMD ["npm","start"]
