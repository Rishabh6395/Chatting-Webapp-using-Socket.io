const http = require('http')
const express = require('express')
const {Server} = require('socket.io')
const exp = require('constants')
const { log } = require('console')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

// Socket Connection
io.on('connection', (socket) => {
    socket.on('user-message', (message) =>{
        io.emit('message', message)
    })
})

app.use(express.static('public'))

app.get('/', (req, res) => {
    return res.sendFile('/public/index.html')
})

server.listen(9000, () => {
    console.log('server is running')
})
