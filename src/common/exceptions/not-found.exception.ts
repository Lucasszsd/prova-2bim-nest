import { NotFoundException } from '@nestjs/common';

export class CustomNotFoundException extends NotFoundException {
  constructor(entity: string, id: string) {
    super(`${entity} com o id ${id} não foi encontrado`);
  }
}
