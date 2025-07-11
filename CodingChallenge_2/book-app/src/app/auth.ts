import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

   @Injectable({ providedIn: 'root' })
   export class Auth {
     private baseUrl = 'http://localhost:8085/auth';
     constructor(private http: HttpClient) {}

     register(user: any) {
       return this.http.post(`${this.baseUrl}/register`, user);
     }

     login(credentials: any) {
       return this.http.post(`${this.baseUrl}/login`, credentials, { responseType: 'text' });
     }

     storeToken(token: string) {
       localStorage.setItem('token', token);
     }

     getToken() {
       return localStorage.getItem('token');
     }

     isLoggedIn(): boolean {
       return !!this.getToken();
     }

     logout() {
       localStorage.removeItem('token');
     }
   }