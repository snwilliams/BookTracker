import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  genres=['Action', 'Autobiography', 'Fantasy', 'Fiction', 'History', 'Horror', 'Sci-Fi', 'Non-Fiction'];

  defaultBook=new Book(1, 'White Fang', 'Jack London', 'Fiction', 1975, 'Random House');
  defaultBook2=new Book(2, 'Call of the Wild', 'Jack London', 'Fiction', 1976, 'Random House');
  books: Book[] = [this.defaultBook, this.defaultBook2];

  constructor() { }

  ngOnInit(): void {
  }

  save(title: string, author: string, genre: string, yearPub: string, publisher: string) {

    const newBook = new Book(1, title, author, genre, Number(yearPub), publisher);
    console.log(newBook);
    this.books.push(newBook);
  }

}
