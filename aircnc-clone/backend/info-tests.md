# MongoDB

```
sudo docker run -d \
    --name mongodb-tests \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=adminpasswd \
    -p 27017:27017 \
    mongo:4.0.9
```

```
sudo docker exec -ti mongodb-tests \
    mongo --host localhost -u admin -p adminpasswd --authenticationDatabase admin \
    --eval "db.getSiblingDB('tests').createUser({user: 'testuser', pwd: 'testpasswd', roles: [{role: 'readWrite', db: 'tests'}]})"
```

```
sudo docker exec -ti mongodb-tests mongo tests -u testuser -p 'testpasswd'
```


# Posgres

```
sudo docker run -d \
    --name postgres-tests \
    -e POSTGRES_USER=cliente1 \
    -e POSTGRES_PASSWORD=123 \
    -e POSTGRES_DB=tests \
    -p 5432:5432 \
    postgres:11.5
```

```
postgres://cliente1:123@localhost:5432/tests
```

```
sudo docker exec -ti postgres-tests psql -d tests -U cliente1 -W
```

# Sequelize Migrations

```
sudo npm install -g sequelize-cli

sequelize init

sequelize migration:create --name name-the-migration

sequelize db:migrate

sequelize db:migrate:undo
```
