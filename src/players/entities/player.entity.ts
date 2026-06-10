import { PlayerPosition } from '@prisma/client';

export class PlayerEntity {
  id: string;
  name: string;
  position: PlayerPosition;
  jerseyNumber: number;
  teamId: string;
  createdAt: Date;
  updatedAt: Date;
}
