// src/deck/schemas/deck.schema.ts
import { Schema, Document } from 'mongoose';

export const CardSchema = new Schema({
  value: { type: String },
  suit: { type: String },
  code: { type: String },
});

export const DeckSchema = new Schema({
  deckId: { type: String, unique: true },
  shuffled: { type: Boolean, default: false },
  remaining: { type: Number },
  cards: { type: [CardSchema] },
});

export interface Card extends Document {
  value: string;
  suit: string;
  code: string;
}

export interface Deck extends Document {
  deckId: string;
  shuffled: boolean;
  remaining: number;
  cards: Card[];
}
