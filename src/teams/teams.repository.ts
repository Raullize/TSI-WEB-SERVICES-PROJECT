import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamsRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll(name?: string) {
    return this.prisma.team.findMany({
      where: name
        ? {
            name: {
              contains: name,
              mode: 'insensitive',
            },
          }
        : undefined,
      orderBy: { name: 'asc' },
    });
  }

  findById(id: string) {
    return this.prisma.team.findUnique({ where: { id } });
  }

  create(data: CreateTeamDto) {
    return this.prisma.team.create({ data });
  }

  update(id: string, data: UpdateTeamDto) {
    return this.prisma.team.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.team.delete({ where: { id } });
  }
}
