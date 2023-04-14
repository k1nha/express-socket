interface RoomI {
  id: string;
}

export class Room {
  public readonly id: string;

  constructor({ id }: RoomI) {
    this.id = id;
  }
}
