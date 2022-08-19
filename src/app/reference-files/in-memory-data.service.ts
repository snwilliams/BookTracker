import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      {id: 9780141439518, title: 'Pride and Prejudice', author: 'Jane Austen', rating: 5.0},
      {id: 9780358653035, title: 'Lord of the Rings', author: 'J.R.R Tolkein', rating: 4.5},
      {id: 9780063081918, title: 'American Gods', author: 'Neil Gaiman', rating: 4.8},
      {id: 9780553381689, title: 'A Game of Thrones', author: 'George R.R. Martin', rating: 3.8},
      {id: 9780486282114, title: 'Frankenstein', author: 'Mary Shelley', rating: 4},
      {id: 9780156030083, title: 'Flowers for Algernon', author: 'Daniel Keyes', rating: 4.3},
      {id: 9798611586020, title: 'White Fang', author: 'Jack London', rating: 5.0},
      {id: 9781250773029, title: `Ender's Game`, author: 'Orson Scott Card', rating: 4.2},
      {id: 9781435171664, title: 'Jane Eyre', author: 'Charlotte Bronte', rating: 3.7},
      {id: 9780553573398, title: `Assassin's Apprentice`, author: 'Robin Hobb', rating: 3.6}
    ];
    return {books};
  }

  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 11;
  }

  constructor() { }
}
