import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { MatchStatus } from '@prisma/client';

@ApiTags('Matches')
@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova partida' })
  @ApiResponse({ status: 201, description: 'Partida criada com sucesso.' })
  create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchesService.create(createMatchDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as partidas' })
  @ApiQuery({ name: 'status', required: false, enum: MatchStatus, description: 'Filtrar por status da partida' })
  @ApiQuery({ name: 'teamId', required: false, type: String, description: 'Filtrar por ID do time (casa ou visitante)' })
  findAll(@Query('status') status?: MatchStatus, @Query('teamId') teamId?: string) {
    return this.matchesService.findAll(status, teamId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma partida pelo ID' })
  findOne(@Param('id') id: string) {
    return this.matchesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma partida' })
  update(@Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto) {
    return this.matchesService.update(id, updateMatchDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma partida' })
  remove(@Param('id') id: string) {
    return this.matchesService.remove(id);
  }
}
