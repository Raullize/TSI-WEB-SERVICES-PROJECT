import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, TeamsModule, PlayersModule],
})
export class AppModule {}
