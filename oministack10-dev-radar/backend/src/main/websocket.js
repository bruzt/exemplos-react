const socketio = require('socket.io');

const redis = require('../database/redis/connection');
const parseStringToArray = require('../utils/parseStringAsArray');
const calculateDistance = require('../utils/calculateDistance');

let io;

exports.setupWebsocket = (server) => {
    
    io = socketio(server);

    io.on('connection', async (socket) => {

        //console.log(socket.id)
        //console.log(socket.handshake.query);

        const { latitude, longitude, techs } = socket.handshake.query;

        try {
            
            await redis.set(socket.id, JSON.stringify({
                coordinates: {
                    latitude: Number(latitude),
                    longitude: Number(longitude),
                },                
                techs: parseStringToArray(techs.toLowerCase())
            }));

            socket.on('new-region', async (message) => {

                await redis.set(socket.id, JSON.stringify({
                    coordinates: {
                        latitude: Number(message.latitude),
                        longitude: Number(message.longitude),
                    },                
                    techs: parseStringToArray(message.techs.toLowerCase())
                }));
            });

            socket.on('disconnect', async () => {
                
                await redis.del(socket.id);
            });

        } catch (error) {
            console.error(error);
        }
    });
}

exports.findConnections = async (coordinates, techs) => {

    try {
        
        const keys = await redis.keys('*');
    
        return keys.filter( async (key) => {
    
            const dev = JSON.parse(await redis.get(key));
    
            if(calculateDistance(coordinates, dev.coordinates) < 10 // 10km
            && dev.techs.some( (item) => techs.includes(item))){
    
                return true;
            }
    
            return false;
        });

    } catch (error) {
        console.error(error);
    }
}

exports.sendMessage = (socketKeyArray, messageKey, data) => {

    socketKeyArray.forEach( (socketKey) => {
        
        io.to(socketKey).emit(messageKey, data);
    });
}