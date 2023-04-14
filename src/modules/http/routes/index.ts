import { RoomController } from '@/modules/controller/RoomController';
import { Router } from 'express';

const routes = Router();
const room = new RoomController();

// ROOM
routes.get('/room', room.getAll);
routes.post('/room');

export { routes };
