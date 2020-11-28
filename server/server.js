const io = require('socket.io')(5000)

io.on('connection', socket =>{
    const id = socket.handshake.query.id
    socket.join(id)

    socket.on('send-message', ({recipeints, text}) =>{
        recipeints.forEach(recipient => {
            const newRecipients = recipeints.filter(r => r !== recipient)
            newRecipients.push(id)
            socket.broadcast.to(recipient).emit('receive-message',{
                recipeints: newRecipients, sender: id, text
            })
        })
    })
})