import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wbhb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService
      .logout()
      .then(() => this.router.navigate(['login']))
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);

        console.log(error);
      });
  }
}
