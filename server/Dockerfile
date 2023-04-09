FROM node:14.17.3-alpine3.14

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .

ARG DB_NAME
ARG DB_USER
ARG DB_PASSWORD

ENV DB_NAME=$DB_NAME
ENV DB_USER=$DB_USER
ENV DB_PASSWORD=$DB_PASSWORD

CMD ["node","index.js"]
