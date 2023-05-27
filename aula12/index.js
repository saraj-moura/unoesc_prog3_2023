const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const {server} = require('socket.io');
const io = new server(server);
const path = require('path');
const { Socket } = require('dgram');

// app.use(express.static(path.join(__dirname, './public')));

// app.get('/', (req, res)=> {
//     res.sendFile(__dirname + '/public/index.html');
// });

// io.on('connection',(socket)=>{
//     let name;
//     console.log('new user connected');

//     socket.on('joining msg',(username)=>{
//         name = username;
//         io.emit('chat message', `---${name} joined the chat ----`);
//     });

//     socket.on('disconnect', () =>{
//         io.emit('chat message', `---${name} left the chat ----`)
//     });

//     socket.on('chat menssage', (msg) =>{
//         socket.broadcast.emit('chat message', msg);
//     });


// });
// server.listen(3000, ()=>{
//     console.log('Server listening on: 3000');
// });


let rooms = {
    sala1: [],
    sala2: [],
    sala3: []
};

let currentRoom = 'sala1';

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    messageInput.value = '';

    rooms[currentRoom].push(message);
    displayMessages();
}

function changeRoom() {
    const roomInput = document.getElementById('roomInput');
    const room = roomInput.value;
    roomInput.value = '';

    if (rooms.hasOwnProperty(room)) {
        currentRoom = room;
        displayMessages();
    } else {
        console.log('Sala não encontrada.');
    }
}

function buzzAllClients() {
    alert('A tela está tremendo!');
}

function displayMessages() {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = '';

    const messages = rooms[currentRoom];
    messages.forEach(message => {
        const p = document.createElement('p');
        p.textContent = message;
        messagesDiv.appendChild(p);
    });
}

displayMessages();
