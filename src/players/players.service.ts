import { Injectable, NotFoundException } from '@nestjs/common';
import { TeamsRepository } from '../teams/teams.repository';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayersRepository } from './players.repository';

@Injectable()
export class PlayersService {
  constructor(
    private readonly playersRepository: PlayersRepository,
    private readonly teamsRepository: TeamsRepository,
  ) {}

  findAll(name?: string, teamId?: string) {
    return this.playersRepository.findAll(name, teamId);
  }

  async findOne(id: string) {
    const player = await this.playersRepository.findById(id);
    if (!player) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Jogador não encontrado',
        error: 'Not Found',
      });
    }
    return player;
  }

  async create(createPlayerDto: CreatePlayerDto) {
    await this.ensureTeamExists(createPlayerDto.teamId);
    return this.playersRepository.create(createPlayerDto);
  }

  async update(id: string, updatePlayerDto: UpdatePlayerDto) {
    await this.ensureExists(id);
    if (updatePlayerDto.teamId) {
      await this.ensureTeamExists(updatePlayerDto.teamId);
    }
    return this.playersRepository.update(id, updatePlayerDto);
  }

  async remove(id: string) {
    await this.ensureExists(id);
    return this.playersRepository.delete(id);
  }

  private async ensureExists(id: string) {
    const player = await this.playersRepository.findById(id);
    if (!player) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Jogador não encontrado',
        error: 'Not Found',
      });
    }
  }

  private async ensureTeamExists(teamId: string) {
    const team = await this.teamsRepository.findById(teamId);
    if (!team) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Time informado não encontrado',
        error: 'Not Found',
      });
    }
  }
}
