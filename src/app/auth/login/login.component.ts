import { Router } from '@angular/router';
import { AuthService } from '../../shared/providers/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this._authService.login(this.email, this.password).subscribe(
      ok => this.router.navigate(['/']),
      error => console.log(error)
    );
  }
}
