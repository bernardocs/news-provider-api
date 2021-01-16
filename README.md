# News Provider API
A little example of Express + Knex + Objection with some authentication stuff

- [Instructions to run](#instructions-to-run)
- [Endpoints](#endpoints)
- [Authentication](#authentication)

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
## Endpoints
### Public API
#### Articles
```bash
# List articles
curl -X GET http://localhost:3000/api/articles

# List articles with category filter
curl -X GET http://localhost:3000/api/articles?category=fantasy

# Get article details by id
curl -X GET http://localhost:3000/api/articles/:id

# Get articles full details by id (must be authenticated)
curl -X GET http://localhost:3000/api/articles/:id -H "Authorization: Bearer <token>"
```

### Admin API
All of these endpoints must include `Authorization: Bearer <token>` header. Go to [Authentication](#authentication) section for more details.
#### Articles
```bash
# List articles
curl -X GET http://localhost:3000/api/admin/articles \
-H 'Authorization: Bearer <token>'

# Get article details by id
curl -X GET http://localhost:3000/api/admin/articles/:id \
-H 'Authorization: Bearer <token>'

# Create new article
curl -X POST localhost:3000/api/admin/articles/ \
-d '
{
  "author_id": 1,
  "category": "fantasy",
  "title": "The Hobbit",
  "summary": "The beggining of a legend",
  "firstParagraph": "<p>In a hole in the ground there lived a hobbit...</p>",
  "body": "<div><p>Pure awesomeness</p><p>Of a book</p></div>"
}' \
-H 'Authorization: Bearer <token>' \
-H 'Content-type: application/json'

# Delete article by id
curl -X DELETE http://localhost:3000/api/admin/articles/:id \
-H 'Authorization: Bearer <token>'
```


#### Authors
```bash
# List aruthors
curl -X GET http://localhost:3000/api/admin/authors \
-H 'Authorization: Bearer <token>'

# Get author details by id
curl -X GET http://localhost:3000/api/admin/authors/:id \
-H 'Authorization: Bearer <token>'

# Create new author
curl -X POST localhost:3000/api/admin/authors/ \
-d '
{
  "name": "J.R.R.Tolkien",
  "picture": "https://bit.ly/35trIha"
}' \
-H 'Authorization: Bearer <token>' \
-H 'Content-type: application/json'

# Delete article by id
curl -X DELETE http://localhost:3000/api/admin/authors/:id \
-H 'Authorization: Bearer <token>'
```

## Authentication
### Sign up
To create a user account you can use `/sign-up` endpoint
```bash
curl -X POST localhost:3000/sign-up/ \
-d '{ "username": "huehue", "password": "passwd" }' \
-H 'Content-type: application/json'
```

To create an **admin user** you must add the field `"profile": "admin"`.
Only **admin user** may create users with profile `admin`. (Go to login section below for more details)
```bash
curl -X POST localhost:3000/sign-up/ -d \
-d '{ "username": "boss", "password": "passwd", "profile": "admin" }' \
-H 'Content-type: application/json'
```

### Login
To access the API as a logged user you must first get a _token_ so you can add it to your requests. You can achieve that you `/login` endpoint. In development, you may use the admin user/password `goat/secretzin` that is created when seeding the database.
```bash
# this is the default admin user already seed into the database
curl localhost:3000/api/login \
-d '{ "username": "goat", "password": "secretzin" }' \
-H "Content-type: application/json"
```
This operation will return a token that will expires in 6h
```
{ "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjEwNzY4MTI2LCJleHAiOjE2MTA3ODk3MjZ9.tO_8Q5eVkM4sn5y4QwYfjFppUihngGiM8mowfOVadv8" }
```
With this token you may authenticate others endpoints adding into the `Authorization` header using `Bearer` scheme.
```bash
curl localhost:3000/api/admin/articles \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjEwNzY4MTI2LCJleHAiOjE2MTA3ODk3MjZ9.tO_8Q5eVkM4sn5y4QwYfjFppUihngGiM8mowfOVadv8"