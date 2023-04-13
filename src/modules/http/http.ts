import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors';

export class App {
  public server: express.Application;
  // TODO: type httpserver, socketserver
  public httpServer: any;
  public socketServer: any;

  constructor() {
    this.server = express();
    this.socket();
    this.middlewares();
  }

  private socket() {
    this.httpServer = createServer(this.server);
    this.socketServer = new Server(this.httpServer, {});
  }

  private middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }
}
