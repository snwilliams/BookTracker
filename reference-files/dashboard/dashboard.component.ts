import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books.sort((a,b)=>(a.rating > b.rating) ? -1: 1).slice(0,4));
  }

  findBooks(): Book[] {
    this.books = this.books.sort((a,b)=>(a.rating > b.rating) ? 1: -1);
    return this.books;
  }
  


}
