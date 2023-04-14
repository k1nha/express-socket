import { Room } from '../entity/room';

export interface RoomRespository {
  getAll(): Promise<Room[]>;
  create(): Promise<void>;
}
