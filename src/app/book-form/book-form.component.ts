import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  starRating = 0;

  genres=['Action', 'Autobiography', 'Fantasy', 'Fiction', 'History', 'Horror', 'Sci-Fi', 'Non-Fiction'];

  books: Book[]=[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  save(title: string, author: string, genre: string, yearPub: string, publisher: string, rating: number): void {
    const newBook = new Book(this.books.length+1, title, author, genre, Number(yearPub), publisher, rating);
    console.log(newBook);
    //this.books.push(newBook);
    this.bookService.add(newBook)
      .subscribe(books => this.books = books);
  }

  delete(book: Book){
    this.books = this.books.filter(b => b !== book);
  }

}
