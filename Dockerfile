FROM node:14.15.4
LABEL maintainer="bernardo.csantos@gmail.com"

COPY . /app

WORKDIR /app

RUN npm i

EXPOSE 3000

RUN if [ "$NODE_ENV" != "production" ]; then npm install -g knex node-wait-for-it ; fi

CMD ["npm", "start"]