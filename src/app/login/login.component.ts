import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  Loginicon: string = '';

  updateInput(event: Event) {
    const selectedCheckbox = event.target as HTMLInputElement;
    this.Loginicon = selectedCheckbox.nextElementSibling?.textContent || '';
  }
  constructor(private http: HttpClient,private router: Router) {}

  login() {
    this.http.get<any[]>('http://localhost:3000/signup1', {
      params: { username: this.username, password: this.password,Loginicon: this.Loginicon }
    }).subscribe(users => {
      if (users.length > 0) {
        
        this.router.navigate(['/dashboard']);
      } else {
        alert('Login failed. Please check your credentials.');
      }
    });
  }
}
