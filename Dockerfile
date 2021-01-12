FROM node:14.15.4

LABEL maintainer="bernardo.csantos@gmail.com"

ADD . /app

WORKDIR /app

RUN npm i --production

EXPOSE 3000

CMD ["npm", "start"]