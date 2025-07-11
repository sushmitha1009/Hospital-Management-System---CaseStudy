import { HttpClient, HttpHeaders } from '@angular/common/http';
   import { Injectable } from '@angular/core';
import { Auth } from './auth';

   @Injectable({ providedIn: 'root' })
   export class Book {
     private baseUrl = 'http://localhost:8085/books';

     constructor(private http: HttpClient, private auth: Auth) {}

     getHeaders() {
       return {
         headers: new HttpHeaders({
           Authorization: `Bearer ${this.auth.getToken()}`,
         }),
       };
     }

     addBook(book: any) {
       return this.http.post(`${this.baseUrl}`, book, this.getHeaders());
     }

     getAllBooks() {
       return this.http.get(`${this.baseUrl}/all`, this.getHeaders());
     }

     getBookByIsbn(isbn: string) {
       return this.http.get(`${this.baseUrl}/${isbn}`, this.getHeaders());
     }

     updateBook(isbn: string, book: any) {
       return this.http.put(`${this.baseUrl}/${isbn}`, book, this.getHeaders());
     }

     deleteBook(isbn: string) {
       return this.http.delete(`${this.baseUrl}/${isbn}`, this.getHeaders());
     }
   }