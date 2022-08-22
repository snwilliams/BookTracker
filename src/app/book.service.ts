import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  defaultBook=new Book(1, 'White Fang', 'Jack London', 'Fiction', 1975, 'Random House', 5);
  defaultBook2=new Book(2, 'Call of the Wild', 'Jack London', 'Fiction', 1976, 'Random House', 4.5);
  books: Book[] = [this.defaultBook, this.defaultBook2];
  

  add(book: Book): Observable<Book[]> {
    this.books.push(book);
    return of(this.books);
  }

  getBooks(): Observable<Book[]> {
    const bookList = of(this.books);
    return bookList;
  }

  constructor() { }
}
