import { IUser } from '../../shared/interfaces/iuser';
import { AuthService, profile$ } from '../../shared/providers/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  user: IUser;
  loggedAdmin: boolean = false;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    profile$.subscribe(
      (user: IUser) => {
        this.loggedAdmin = false;
        this.user = user;
        if(user && user.admin){
          this.loggedAdmin = true;
        }
      }
    );

    this._authService.getProfile().subscribe(
      user => this.user = user,
      error => console.log(error)
    );
  }

  logout(){
    this._authService.logout();
  }
}
