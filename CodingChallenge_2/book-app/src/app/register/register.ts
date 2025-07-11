import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // ✅ Add FormsModule here
  templateUrl: './register.html',
})
export class Register {
  user = { username: '', password: '' };

  constructor(private auth: Auth, private router: Router) {}

  register() {
    this.auth.register(this.user).subscribe(() => {
      this.auth.login(this.user).subscribe((token: any) => {
        this.auth.storeToken(token);
        this.router.navigate(['/home']);
      });
    });
  }
}
