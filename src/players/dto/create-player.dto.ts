import { ApiProperty } from '@nestjs/swagger';
import { PlayerPosition } from '@prisma/client';
import { IsEnum, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreatePlayerDto {
  @ApiProperty({ example: 'João Silva' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ enum: PlayerPosition, example: PlayerPosition.PG })
  @IsEnum(PlayerPosition)
  position: PlayerPosition;

  @ApiProperty({ example: 10 })
  @IsInt()
  @Min(0)
  jerseyNumber: number;

  @ApiProperty({ example: 'team_id_here' })
  @IsString()
  @IsNotEmpty()
  teamId: string;
}
