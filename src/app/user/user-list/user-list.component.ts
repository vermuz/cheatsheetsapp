import { AuthService } from '../../shared/providers/auth.service';
import { PasswordModalComponent } from '../../shared/modals/password-modal/password-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private _userService: UserService, private _authService: AuthService, private _modalPassword: NgbModal) { }

  ngOnInit() {
    this._userService.getAll().subscribe(
      users => this.users = users,
      error => console.log(error)
    );
  }

  changePassword(user: IUser) {
    const modalRef = this._modalPassword.open(PasswordModalComponent);

    modalRef.componentInstance.user = user;
    return modalRef.result.then(
      () => {
        this._userService.password(user.id, user.password).subscribe(
          ok => console.log('change password'),
          error => console.log(error)
        );
      }
    );
  }

  changeActive(user: IUser) {
    if (user.is_active) {
      this._userService.deactivate(user.id).subscribe(
        ok => {
          user.is_active = false;
          this._authService.reloadProfile();
        },
        error => console.log(error)
      );
    } else {
      this._userService.activate(user.id).subscribe(
        () => {
          user.is_active = true;
        },
        error => console.log(error)
      );
    }
  }

  changeAdministrator(user: IUser) {
    this._userService.setIsAdmin(user.id, !user.admin).subscribe(
      () => {
        user.admin = !user.admin;
        this._authService.reloadProfile();
      },
      error => console.log(error)
    );
  }

}
