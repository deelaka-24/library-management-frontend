import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from '../../model/Book';

@Component({
  selector: 'app-book-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css'],
})
export class BookPageComponent {
  public bookList: Book[] = [];

  constructor(private http: HttpClient) {
    this.loadBook();
  }

  loadBook() {
    this.http
      .get<Book[]>('http://localhost:8080/book/view-all-books')
      .subscribe((data) => {
        this.bookList = data;
      });
  }

  updateBook(book: Book) {}
  deleteBook(id: number) {}
}
