import { Module } from '@nestjs/common';
import { DeckService } from './deck.service';
import { DeckController } from './deck.controller';
import { DeckSchema } from './schemas/deck.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [DeckService],
  controllers: [DeckController],
  imports: [
    MongooseModule.forFeature([{ name: 'Deck', schema: DeckSchema }]),
    HttpModule,
  ],
})
export class DeckModule {}
