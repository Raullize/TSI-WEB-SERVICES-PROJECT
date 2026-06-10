import { Body, Controller, Delete, Get, Param, Post, Query, Put } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayersService } from './players.service';

@ApiTags('Jogadores')
@Controller('jogadores')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'teamId', required: false })
  @ApiOperation({ summary: 'Lista jogadores' })
  findAll(@Query('name') name?: string, @Query('teamId') teamId?: string) {
    return this.playersService.findAll(name, teamId);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um jogador' })
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Edita um jogador' })
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playersService.update(id, updatePlayerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um jogador' })
  remove(@Param('id') id: string) {
    return this.playersService.remove(id);
  }
}
