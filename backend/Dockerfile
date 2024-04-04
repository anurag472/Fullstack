FROM node:iron-alpine

COPY package*.json /usr/src/app/
COPY . /usr/src/app/
WORKDIR /usr/src/app
RUN npm install
COPY . .