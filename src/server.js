// const express = require('express')
// const app = express()
// const port = '192.168.0.10'
// var http = require('http').createServer(app);
// const io = require('socket.io')(http);

// io.on("connection", function(socket) {
//     socket.on('room', function (user_id) { //I use the user_id of the user to create room

//         socket.join(user_id,()=>{
//             console.log(user_id+'방입장');
//         });
//     });
//     console.log('a user connected');
//     socket.on("send message",messageobject=>{
//         console.log(messageobject.name);
//         console.log(messageobject.body);
//         io.to(messageobject.name).emit("message",messageobject.body);
//     })
    
// })


// http.listen(port, () => console.log(`Example app listening on port ${port}!`))