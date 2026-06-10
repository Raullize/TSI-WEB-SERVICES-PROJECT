import { Body, Controller, Delete, Get, Param, Post, Query, Put } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TeamsService } from './teams.service';

@ApiTags('Times')
@Controller('times')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  @ApiQuery({ name: 'name', required: false })
  @ApiOperation({ summary: 'Lista todos os times' })
  findAll(@Query('name') name?: string) {
    return this.teamsService.findAll(name);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um time' })
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.create(createTeamDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Edita um time' })
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamsService.update(id, updateTeamDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um time' })
  remove(@Param('id') id: string) {
    return this.teamsService.remove(id);
  }
}
