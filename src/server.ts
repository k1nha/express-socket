import { App } from './modules/http/http';

new App().httpServer.listen(3030, () => {
  // eslint-disable-next-line no-console
  console.log('Starting server on port 3030 🚀');
});
