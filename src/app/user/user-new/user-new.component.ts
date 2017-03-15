import { Router } from '@angular/router';
import { UserService } from '../../shared/providers/user.service';
import { IUser } from '../../shared/interfaces/iuser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {
  confirmpassword: string = '';
  user:IUser = {
    email: '',
    password: '',
    name: '',
  };

  constructor(
    private _userService: UserService,
    private _router: Router
    ) { }

  ngOnInit() {
  }

  newUser(){
    this._userService.create(this.user).subscribe(
      user => this._router.navigate(['/users']),
      error => console.log(error)
    );
  }
}
