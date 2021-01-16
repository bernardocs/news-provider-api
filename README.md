# News Provider API
A little example of Express + Knex + Objection with some authentication stuff

## Instructions to run
> [Docker Compose](https://docs.docker.com/compose/install/) is required

Before lauching the API we need to setup the database (migrations and seed):
```bash
# setup database 
$ make setup
```

Now, you can just start the API:
```bash
# development
$ docker-compose up
```

In production, you should run
```bash
# production
$ npm start
```
