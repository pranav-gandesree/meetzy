
const { Server } = require("socket.io");

const io = new Server(8000, {
  cors: true,
});

// io.on("connection", (socket) => {
//   console.log(`Socket Connected`, socket.id);
//   socket.on("room:join", (data) => {
//     const { email, room } = data;
//     emailToSocketIdMap.set(email, socket.id);
//     socketidToEmailMap.set(socket.id, email);
//     io.to(room).emit("user:joined", { email, id: socket.id });
//     socket.join(room);
//     io.to(socket.id).emit("room:join", data);
//   });

//   socket.on("user:call", ({ to, offer }) => {
//     io.to(to).emit("incomming:call", { from: socket.id, offer });
//   });

//   socket.on("call:accepted", ({ to, ans }) => {
//     io.to(to).emit("call:accepted", { from: socket.id, ans });
//   });

//   socket.on("peer:nego:needed", ({ to, offer }) => {
//     console.log("peer:nego:needed", offer);
//     io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
//   });

//   socket.on("peer:nego:done", ({ to, ans }) => {
//     console.log("peer:nego:done", ans);
//     io.to(to).emit("peer:nego:final", { from: socket.id, ans });
//   });
// });

// io.on("connection", (socket) => { 
//   console.log("user connected", socket.id)

//   socket.on("room:join", (data) => {
//     const { roomId } = data;
//     console.log(roomId);
//   });
// })




io.on('connection', (socket) => {
  console.log("server is connected")

  socket.on('join-room', (roomId, userId) => {
      console.log(`a new user ${userId} joined room ${roomId}`)
      socket.join(roomId)
      socket.broadcast.to(roomId).emit('user-connected', userId)
  })

  socket.on('user-toggle-audio', (userId, roomId) => {
      socket.join(roomId)
      socket.broadcast.to(roomId).emit('user-toggle-audio', userId)
  })

  socket.on('user-toggle-video', (userId, roomId) => {
      socket.join(roomId)
      socket.broadcast.to(roomId).emit('user-toggle-video', userId)
  })

  socket.on('user-leave', (userId, roomId) => {
      socket.join(roomId)
      socket.broadcast.to(roomId).emit('user-leave', userId)
  })
})