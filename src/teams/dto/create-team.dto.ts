import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTeamDto {
  @ApiProperty({ description: 'Nome do time', example: 'Lakers' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Cidade do time', example: 'Los Angeles' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ description: 'Cor principal do uniforme', example: '#FDB927' })
  @IsString()
  @IsNotEmpty()
  uniformColor: string;

  @ApiPropertyOptional({ description: 'URL do logo do time', example: 'https://exemplo.com/logo.png' })
  @IsString()
  @IsOptional()
  logoUrl?: string;
}
