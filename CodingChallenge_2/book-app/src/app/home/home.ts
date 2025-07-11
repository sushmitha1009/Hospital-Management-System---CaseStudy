import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { FormsModule } from '@angular/forms'; // ✅ Import this
import { CommonModule } from '@angular/common'; // (Optional but recommended if using ngIf/ngFor)

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Add here
  templateUrl: './home.html'
})
export class Home implements OnInit {
  books: any[] = [];
  newBook = { isbn: '', title: '', author: '', publicationYear: 0 };
  updateMode = false;

  constructor(private bookService: Book) {}

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe((data: any) => {
      this.books = data;
    });
  }

  addBook() {
    this.bookService.addBook(this.newBook).subscribe(() => {
      this.getAllBooks();
      this.newBook = { isbn: '', title: '', author: '', publicationYear: 0 };
    });
  }

  editBook(book: any) {
    this.newBook = { ...book };
    this.updateMode = true;
  }

  updateBook() {
    this.bookService.updateBook(this.newBook.isbn, this.newBook).subscribe(() => {
      this.getAllBooks();
      this.updateMode = false;
      this.newBook = { isbn: '', title: '', author: '', publicationYear: 0 };
    });
  }

  deleteBook(isbn: string) {
    this.bookService.deleteBook(isbn).subscribe(() => this.getAllBooks());
  }
}
