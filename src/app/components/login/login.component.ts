import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'wbhb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  password!: string;
  email!: string;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.authService
        .login(this.email, this.password)
        .then(() => this.router.navigateByUrl('/home'))
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }

          console.log(error);
        });
    }
  }
}
