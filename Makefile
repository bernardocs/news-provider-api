SHELL := /bin/bash

.PHONY: setup-db
setup-db:
	knex migrate:latest --esm
	knex seed:run --esm