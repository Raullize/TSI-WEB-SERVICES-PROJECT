import { MatchStatus } from '@prisma/client';

export class MatchEntity {
  id: string;
  date: Date;
  location: string;
  status: MatchStatus;
  homeTeamId: string;
  homeTeamScore: number | null;
  awayTeamId: string;
  awayTeamScore: number | null;
  createdAt: Date;
  updatedAt: Date;
}
