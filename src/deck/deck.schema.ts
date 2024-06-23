import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Deck extends Document {
  @Prop({ required: true })
  deckId: string;

  @Prop({ required: true })
  shuffled: boolean;

  @Prop({ required: true })
  remaining: number;

  @Prop({
    type: [{ code: String, value: String, suit: String, image: String }],
  })
  cards: Array<any>;
}

export const DeckSchema = SchemaFactory.createForClass(Deck);
