import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { BookService } from '../book.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  books: Book[] = [];

  constructor(private bookService: BookService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  add(title: string, author: string): void {
    title = title.trim();
    author = author.trim();
    if(!title) {return;}
    this.bookService.addBook({ title } as Book)
      .subscribe(book => {
        if (!author) {
          author="Author Unknown";
        }
        book.author=author;
        this.books.push(book);
      })
  }

  delete(book: Book): void {
    this.books = this.books.filter(b => b !== book);
    this.bookService.deleteBook(book.id).subscribe();
  }

}
