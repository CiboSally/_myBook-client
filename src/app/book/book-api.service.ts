import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({ providedIn: 'root' })
export class BookApiService {
  constructor() {}

  getAll(): Book[] {
    return [
      {
        title: 'Moby Dick',
        author: 'Herman Melville',
        abstract: 'Guy fights with whale',
        numOfPages: 120,
      },
      {
        title: '1984',
        author: 'George Orwell',
        abstract: 'Lorem ipsum',
        numOfPages: 230,
      },
    ];
  }
}
