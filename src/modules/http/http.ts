import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import { routes } from './routes';

dotenv.config();

export class App {
  public server: express.Application;
  // TODO: type httpserver, socketserver
  public httpServer: any;
  public socketServer: any;

  constructor() {
    this.server = express();
    this.middlewares();
    this.router();
    this.socket();
  }

  private socket() {
    this.httpServer = createServer(this.server);
    this.socketServer = new Server(this.httpServer, {
      cors: {
        origin: process.env.ORIGIN_URL,
        credentials: true,
      },
    });
  }

  private middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private router() {
    this.server.use(routes);
  }
}
