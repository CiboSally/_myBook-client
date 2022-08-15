import { Component } from '@angular/core';
import { Book } from './book/book';
import { BookApiService } from './book/book-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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

  goToBookDetails(book: Book) {
    console.log(book);
  }

  updateBookSearchTerm(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.bookSearchTerm = inputElement.value;
  }

  constructor(private bookApi: BookApiService) {
    // we can get the BookApiService here because it's provided in root
    console.log(bookApi, 'Hello from App Component');
  }
}
