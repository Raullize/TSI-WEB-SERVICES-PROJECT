import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { MatchStatus } from '@prisma/client';

export class CreateMatchDto {
  @ApiProperty({ description: 'Data e hora da partida', example: '2026-05-28T19:00:00Z' })
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @ApiProperty({ description: 'Local da partida', example: 'Dunk Park - Porto Alegre' })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiPropertyOptional({ description: 'Status da partida', enum: MatchStatus, example: 'SCHEDULED', default: MatchStatus.SCHEDULED })
  @IsEnum(MatchStatus)
  @IsOptional()
  status?: MatchStatus;

  @ApiProperty({ description: 'ID do time da casa', example: 'team_id_here' })
  @IsString()
  @IsNotEmpty()
  homeTeamId: string;

  @ApiPropertyOptional({ description: 'Pontuação do time da casa', example: 0, default: 0 })
  @IsInt()
  @IsOptional()
  homeTeamScore?: number;

  @ApiProperty({ description: 'ID do time visitante', example: 'team_id_here' })
  @IsString()
  @IsNotEmpty()
  awayTeamId: string;

  @ApiPropertyOptional({ description: 'Pontuação do time visitante', example: 0, default: 0 })
  @IsInt()
  @IsOptional()
  awayTeamScore?: number;
}
