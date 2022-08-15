import { Component, OnInit } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  bookSearchTerm = '';

  books: Book[] = [
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

  constructor() {}

  ngOnInit(): void {}

  goToBookDetails(book: Book) {
    console.log(book);
  }

  updateBookSearchTerm(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.bookSearchTerm = inputElement.value;
  }
}
