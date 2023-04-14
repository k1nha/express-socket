import { App } from './modules/http/http';
import logger from './utils/logger';

const app = new App();

// TODO: type socket
app.socketServer.on('connection', (socket: any) => {
  logger.info(`User connected: ${socket.id}`);

  socket.on('message', (data: string) => {
    //TODO: change console to logging
    console.log(data);
  });
});

app.httpServer.listen(3030, () => {
  // eslint-disable-next-line no-console
  //TODO: change console to logging
  // logger.info('🚀 Starting server on port 3030 🚀');
  console.log('🚀 Starting server on port 3030 🚀');
});
