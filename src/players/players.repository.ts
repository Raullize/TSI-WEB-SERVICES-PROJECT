import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayersRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll(name?: string, teamId?: string) {
    return this.prisma.player.findMany({
      where: {
        ...(name
          ? {
              name: {
                contains: name,
                mode: 'insensitive',
              },
            }
          : {}),
        ...(teamId ? { teamId } : {}),
      },
      include: { team: true },
      orderBy: { name: 'asc' },
    });
  }

  findById(id: string) {
    return this.prisma.player.findUnique({ where: { id } });
  }

  create(data: CreatePlayerDto) {
    return this.prisma.player.create({ data });
  }

  update(id: string, data: UpdatePlayerDto) {
    return this.prisma.player.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.player.delete({ where: { id } });
  }
}
