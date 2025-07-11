import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  imports: [CommonModule, FormsModule]
})
export class Login {
  credentials = { username: '', password: '' };
  errorMessage = '';

  constructor(private auth: Auth, private router: Router) {}

  login() {
  console.log('Login button clicked');
  this.auth.login(this.credentials).subscribe({
    next: (token: any) => {
      this.auth.storeToken(token);
      this.router.navigate(['/home']);
    },
    error: () => {
      this.errorMessage = 'Invalid username or password';
    }
  });
}
}
