import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateTeamDto {
  @ApiProperty({ example: 'Basket Club' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Curitiba' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'Azul e Branco' })
  @IsString()
  @IsNotEmpty()
  uniformColor: string;

  @ApiProperty({ example: 'https://example.com/logo.png' })
  @IsString()
  @IsUrl()
  logoUrl: string;
}
