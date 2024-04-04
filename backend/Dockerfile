FROM node:iron-alpine

COPY . /app

WORKDIR /app

RUN apk add --no-cache --update --virtual build-deps \
    python3 \
    build-base git \
  && npm install && apk del build-deps


EXPOSE 5000

CMD ["npm", "start"]