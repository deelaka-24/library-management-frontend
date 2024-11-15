import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from '../../model/Book';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css'],
})
export class BookPageComponent {
  public bookList: any = [];

  constructor(private http: HttpClient) {
    this.loadBookTable();
  }

  loadBookTable() {
    this.http
      .get('http://localhost:8080/book/view-all-books')
      .subscribe((res) => {
        this.bookList = res;
      });
  }

  deleteBook(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http
          .delete(`http://localhost:8080/book/delete-book-by-id/${id}`)
          .subscribe((data) => {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
            this.loadBookTable();
          });
      }
    });
    //----------------------
  }

  public selectedBook: any = {};

  selectBook(book: any) {
    console.log(book);
    this.selectedBook = book;
  }

  updateBook() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.http
          .put('http://localhost:8080/book/update-book', this.selectedBook)
          .subscribe((data) => {
            Swal.fire('Saved!', '', 'success');
          });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
