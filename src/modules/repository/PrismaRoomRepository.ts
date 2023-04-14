import { Room } from '../entity/room';
import { RoomRespository } from './RoomRepository';
import { PrismaClient } from '@prisma/client';

export class PrismaRoomRepository implements RoomRespository {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly prisma: PrismaClient) { }

  public async getAll(): Promise<Room[]> {
    const rooms = await this.prisma.room.findMany({});
    return rooms;
  }

  public async create(): Promise<void> {
    await this.prisma.room.create({
      data: {},
    });
  }
}
