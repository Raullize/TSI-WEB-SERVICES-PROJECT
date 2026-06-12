import { ApiProperty } from '@nestjs/swagger';
import { PlayerPosition } from '@prisma/client';
import { IsEnum, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreatePlayerDto {
  @ApiProperty({ description: 'Nome do jogador', example: 'Raul Lize' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Posição do jogador', enum: PlayerPosition, example: 'PF' })
  @IsEnum(PlayerPosition)
  @IsNotEmpty()
  position: PlayerPosition;

  @ApiProperty({ description: 'Número da camisa', example: 12 })
  @IsInt()
  @Min(0)
  jerseyNumber: number;

  @ApiProperty({ description: 'ID do time', example: 'team_id_here' })
  @IsString()
  @IsNotEmpty()
  teamId: string;
}
