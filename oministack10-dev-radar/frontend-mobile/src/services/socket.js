import socketio from 'socket.io-client';

const socket = socketio('http://192.168.1.119:3001', {
    autoConnect: false
});

function connect(latitude, longitude, techs) {

    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    };

    socket.connect();
}

function disconnect(){

    if(socket.connected){

        socket.disconnect();
    }
}

function subscribeToNewDevs(subscribeFunction){

    socket.on('new-dev', subscribeFunction);
}

function isConnected(){

    return socket.connected;
}

function emitMessage(key, message){

    socket.emit(key, message);
}

export { connect, disconnect, subscribeToNewDevs, isConnected, emitMessage };