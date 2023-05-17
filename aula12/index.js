const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const {server} = require('socket.io');
const io = new server(server);
const path = require('path');
const { Socket } = require('dgram');

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection',(socket)=>{
    let name;
    console.log('new user connected');

    socket.on('joining msg',(username)=>{
        name = username;
        io.emit('chat message', `---${name} joined the chat ----`);
    });

    socket.on('disconnect', () =>{
        io.emit('chat message', `---${name} left the chat ----`)
    });

    socket.on('chat menssage', (msg) =>{
        socket.broadcast.emit('chat message', msg);
    });


});
server.listen(3000, ()=>{
    console.log('Server listening on: 3000');
});