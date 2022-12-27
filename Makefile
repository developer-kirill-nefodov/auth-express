#!/usr/bin/make

include .env

#----------- Make Environment ----------------------
docker_compose_bin= $(shell command -v docker-compose 2> /dev/null)
SITE_NODE_SERVICE=site
API_NODE_SERVICE=api
COMPOSE_CONFIG=--env-file .env -p $(PROJECT_NAME) -f docker/docker-compose.$(ENVIRONMENT).yml

.DEFAULT_GOAL := help

# docker kill $(docker ps -q)
# docker rm $(docker ps -a -q)


help: ## Show this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_-]+:.*?## / {printf "  \033[92m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

---------------: ## ------[ ACTIONS ]---------
#Actions --------------------------------------------------
build-img: ## Build images
	$(docker_compose_bin) $(COMPOSE_CONFIG) build
up: ## Start all containers (in background)
	$(docker_compose_bin) $(COMPOSE_CONFIG) up --no-recreate -d
up-force: ## Start all containers (in background)
	$(docker_compose_bin) $(COMPOSE_CONFIG) up -d
up-runtime: ## Start all containers (in background)
	$(docker_compose_bin) $(COMPOSE_CONFIG) up
down: ## Stop all started for development containers
	$(docker_compose_bin) $(COMPOSE_CONFIG) down || true
restart: ## Restart all started for development containers
	$(docker_compose_bin) $(COMPOSE_CONFIG) restart
migrate:
	$(docker_compose_bin) $(COMPOSE_CONFIG) run --rm $(API_NODE_SERVICE) npm run migrate
down-migrate:
	$(docker_compose_bin) $(COMPOSE_CONFIG) run --rm $(API_NODE_SERVICE) npm run down-migrate
seed:
	$(docker_compose_bin) $(COMPOSE_CONFIG) run --rm $(API_NODE_SERVICE) npm run seed
