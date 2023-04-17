# Multi Docker App template
> simple template of multi docker application

## Tech

- server `nodejs` with `express` and `prisma` as ORM
- database `postgresql`
- proxy `nginx`
- contaierised by `docker`
- control by `docker-compose`

## Installation

> make sure `nodejs` installed;
> make sure `docker` + `docker-compose` installed;

```sh
git clone https://github.com/Max-im/docker_nginx_client_server.git
cd docker_nginx_client_server
npm run start
```

## Routes

| Method | URL | Description |
| ------ | ------ | ------ |
| GET | / | return all values |
| GET | /:title | create new item in database and return all the values|
