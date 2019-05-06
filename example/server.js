const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
  socket.on('invoice', data => {
    socket.emit('invoice', Math.random() + data)
  })
})

server.listen(4000, () => console.log(4000))
