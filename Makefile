SHELL := /bin/bash

.PHONY: setup
setup:
	docker-compose up -d db
	docker-compose exec api wait-for-it db:5432 -- bash -c "knex migrate:latest --esm && knex seed:run --esm"
	docker-compose stop db
