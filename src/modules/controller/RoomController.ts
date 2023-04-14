import prisma from '@/services/prisma';
import { PrismaRoomRepository } from '../repository/PrismaRoomRepository';
import { Request, Response } from 'express';

const makeRep = () => {
  return new PrismaRoomRepository(prisma);
};

export class RoomController {
  async getAll(req: Request, res: Response) {
    const rep = await makeRep().getAll();
    return res.status(200).json({ data: rep });
  }

  async create(req: Request, res: Response) {
    const rep = await makeRep().create();
    return res.status(200).json({ data: rep });
  }
}
