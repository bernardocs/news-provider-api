# News Provider API
A little example of Express + Knex + Objection with some authentication stuff

## Instructions to run
This API need a Postgres database up to function properly.

You can setup this by using `docker-compose` to start one that's already properly defined in the `docker-compose.yml` file:
```bash
# setup postgres database
$ docker-compose up
```

After that, you should install all the dependencies _aaand_ install `knex` **globally** in your machine
```bash
# install all dependencies
$ npm install

# install knex globally
$ npm install -g knex
```

Now, you can run the migrations and seed the database with this very convenient command:
```bash
$ make setup-db
```

Now, you can just start the API:
```bash
# Development
$ npm run dev

# Production
$ npm start
```
