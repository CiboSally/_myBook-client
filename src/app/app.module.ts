import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookModule } from './book/book.module';

@NgModule({
  declarations: [AppComponent, BookEditComponent],
  imports: [BrowserModule, BookModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
