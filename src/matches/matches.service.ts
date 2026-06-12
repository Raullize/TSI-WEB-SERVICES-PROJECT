import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { PrismaService } from '../prisma/prisma.service';
import { MatchStatus } from '@prisma/client';

@Injectable()
export class MatchesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMatchDto: CreateMatchDto) {
    return this.prisma.match.create({
      data: createMatchDto,
    });
  }

  async findAll(status?: MatchStatus, teamId?: string) {
    const where: any = {};
    
    if (status) {
      where.status = status;
    }
    
    if (teamId) {
      where.OR = [
        { homeTeamId: teamId },
        { awayTeamId: teamId },
      ];
    }

    return this.prisma.match.findMany({
      where,
      include: {
        homeTeam: true,
        awayTeam: true,
      },
      orderBy: {
        date: 'asc',
      },
    });
  }

  async findOne(id: string) {
    const match = await this.prisma.match.findUnique({
      where: { id },
      include: {
        homeTeam: true,
        awayTeam: true,
      },
    });

    if (!match) {
      throw new NotFoundException(`Partida com ID ${id} não encontrada`);
    }

    return match;
  }

  async update(id: string, updateMatchDto: UpdateMatchDto) {
    await this.findOne(id); // Verifica se existe

    return this.prisma.match.update({
      where: { id },
      data: updateMatchDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Verifica se existe

    return this.prisma.match.delete({
      where: { id },
    });
  }
}
