

module.exports = (io) => {

    let messages = [];

    io.on('connection', (socket) => {
        console.log(socket.id);

        socket.emit('firstTime', messages);

        socket.on('sendMessage', (data) => {
            
            messages.push(data);

            io.emit('receivedMessage', data);
        });
    });
}