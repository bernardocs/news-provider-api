SHELL := /bin/bash

.PHONY: setup-db
setup-db:
	knex migrate:latest --esm
	knex seed:run --esm

.PHONY: redo-setup-db
redo-setup-db:
	knex migrate:rollback --esm
	$(MAKE) setup-db