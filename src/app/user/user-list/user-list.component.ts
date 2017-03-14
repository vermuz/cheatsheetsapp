import { IUser } from '../../shared/interfaces/iuser';
import { UserService } from '../../shared/providers/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: IUser[];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getAll().subscribe(
      users => this.users = users,
      error => console.log(error)
    );
  }

  changePassword(id: number) {

  }

  changeActive(id: number) {

  }

  changeAdministrator(id: number) {
    
  }

}
