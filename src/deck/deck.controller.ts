import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DeckService } from './deck.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';

@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post()
  async create(@Body() createDeckDto: CreateDeckDto) {
    return this.deckService.create(createDeckDto);
  }

  @Get()
  async findAll() {
    return this.deckService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.deckService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDeckDto: UpdateDeckDto) {
    return this.deckService.update(id, updateDeckDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.deckService.remove(id);
  }

  @Post('fetch-and-save-cards')
  async fetchAndSaveCards() {
    await this.deckService.fetchAndSaveCards();
    return { message: 'Processo de buscar e salvar cartas iniciado.' };
  }
}
