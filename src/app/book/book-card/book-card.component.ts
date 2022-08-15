import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  // @Input() content!: Book; // Caution
  // @Input() content: Book = { title: '', author: '', abstract: '' };

  @Input() content: Book | undefined;
  @Output() detailClick = new EventEmitter<Book>();
  customStyle = {
    color: 'gray',
  };

  handleDetailClick(event: MouseEvent) {
    event.preventDefault();
    console.log(event);
    this.detailClick.emit(this.content);
  }

  constructor() {}

  ngOnInit(): void {}
}
