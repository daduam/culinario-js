FROM node:14-alpine

WORKDIR /usr/api

COPY package.json .
COPY package-lock.json .

RUN npm install
RUN apk add --no-cache bash

COPY . .