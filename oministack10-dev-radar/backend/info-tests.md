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