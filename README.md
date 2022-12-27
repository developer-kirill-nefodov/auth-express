## Starting

Git clone project
```
git clone https://github.com/developer-kirill-nefodov/AuthExpress.git

cd ./AuthExpress/
```

Don't forget to fill in the empty fields
```sh
cp .env.exemple .env
```

Raise the database
```sh
make build-img
```
Run container
```sh
npm install

make up

make migrate
make seed
```

Restart container
```sh
make restart
```

Down container
```sh
make down
```

## Description
* server: http://localhost:4000
* pgadmin: http://localhost:5050
* redis-commander: http://localhost:8081

## Technologies:
* Node
* Express
* Makefile
* Docker
* Postgre
* Sequelize and sequelize-cli
* Redis
* REST API
