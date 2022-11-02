const app = require('express')();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
// Access io server
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})
// Easy use io
io.on('connection', (socket) => {
    console.log('Client connected ' + socket.id)
    socket.on("disconnect", () => {
        console.log('Clinet disconnected');
    });
})