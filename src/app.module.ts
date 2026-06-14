import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
import { MatchesModule } from './matches/matches.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, TeamsModule, PlayersModule, MatchesModule],
})
export class AppModule {}
