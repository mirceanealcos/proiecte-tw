// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  eroare = false;

  constructor(private auth: AuthService, private router: Router) {}

  // Denumirea metodei trebuie să corespundă cu cea din template
  onSubmit(form: any): void {
    const { username, password } = form.value;
    if (this.auth.login(username, password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.eroare = true;
    }
  }
}
