import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TeamsRepository } from './teams.repository';

@Injectable()
export class TeamsService {
  constructor(private readonly teamsRepository: TeamsRepository) {}

  findAll(name?: string) {
    return this.teamsRepository.findAll(name);
  }

  async findOne(id: string) {
    const team = await this.teamsRepository.findById(id);
    if (!team) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Time não encontrado',
        error: 'Not Found',
      });
    }
    return team;
  }

  async create(createTeamDto: CreateTeamDto) {
    return this.teamsRepository.create(createTeamDto);
  }

  async update(id: string, updateTeamDto: UpdateTeamDto) {
    await this.ensureExists(id);
    return this.teamsRepository.update(id, updateTeamDto);
  }

  async remove(id: string) {
    await this.ensureExists(id);
    return this.teamsRepository.delete(id);
  }

  private async ensureExists(id: string) {
    const team = await this.teamsRepository.findById(id);
    if (!team) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Time não encontrado',
        error: 'Not Found',
      });
    }
  }
}
