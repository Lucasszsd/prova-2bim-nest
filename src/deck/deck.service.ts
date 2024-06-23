import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Deck } from './schemas/deck.schema';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';

@Injectable()
export class DeckService {
  constructor(
    @InjectModel('Deck') private readonly deckModel: Model<Deck>,
    private readonly httpService: HttpService,
  ) {}

  async create(createDeckDto: CreateDeckDto): Promise<Deck> {
    const createdDeck = new this.deckModel(createDeckDto);
    return createdDeck.save();
  }

  async findAll(): Promise<Deck[]> {
    return this.deckModel.find().exec();
  }

  async findOne(id: string): Promise<Deck> {
    return this.deckModel.findById(id).exec();
  }

  async update(id: string, updateDeckDto: UpdateDeckDto): Promise<Deck> {
    return this.deckModel
      .findByIdAndUpdate(id, updateDeckDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Deck> {
    return this.deckModel.findByIdAndDelete(id).exec();
  }

  async fetchAndSaveCards(): Promise<void> {
    try {
      const shuffleResponse: AxiosResponse = await this.httpService
        .get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .toPromise();
      const deckId = shuffleResponse.data.deck_id;
      const drawResponse: AxiosResponse = await this.httpService
        .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`)
        .toPromise();
      const cards = drawResponse.data.cards;
      const promises = cards.map((card) =>
        this.deckModel.create({
          code: card.code,
          image: card.image,
          value: card.value,
          suit: card.suit,
        }),
      );
      await Promise.all(promises);

      console.log('Cartas salvas no banco de dados.');
    } catch (error) {
      console.error('Erro ao buscar ou salvar as cartas:', error.message);
    }
  }
}
