// src/deck/dto/create-deck.dto.ts
export class CreateDeckDto {
  readonly deckId: string;
  readonly shuffled: boolean;
  readonly remaining: number;
  readonly cards: CardDto[];
}

export class CardDto {
  readonly value: string;
  readonly suit: string;
  readonly code: string;
}
