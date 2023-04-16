/* eslint-disable no-console */
import RoomController from './modules/controller/RoomController';
import { App } from './modules/http/http';
import logger from './utils/logger';

const app = new App();
const room = new RoomController();

// TODO: type socket
app.socketServer.on('connection', (socket: any) => {
  logger.info(`User connected: ${socket.id}`);

  socket.on('create-room', (data: string) => {
    //TODO: change console to logging
    console.log(data);

    room.create;

    socket.emit('room-created', () => {
      // TODO: send message and redirect user to room
    });
  });
});

app.httpServer.listen(3030, () => {
  //TODO: change console to logging
  // logger.info('🚀 Starting server on port 3030 🚀');
  console.log('🚀 Starting server on port 3030 🚀');
});
