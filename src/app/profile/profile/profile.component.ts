import { PasswordModalComponent } from '../../shared/modals/password-modal/password-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../shared/providers/user.service';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../shared/interfaces/iuser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: IUser;
  editMode: boolean;

  constructor(
    private route: ActivatedRoute,
    private _userService: UserService,
    private _modalPassword: NgbModal
  ) { }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
  }

  saveName() {
    this._userService.saveName(this.user.name).subscribe(
      user => this.user = user,
      error => console.log(error)
    );
  }

  changePassword() {
    const modalRef = this._modalPassword.open(PasswordModalComponent);

    modalRef.componentInstance.user = this.user;
    return modalRef.result.then(
      () => {
        this._userService.password(this.user.id, this.user.password).subscribe(
          ok => console.log('change password'),
          error => console.log(error)
        );
      }
    ).catch(error => null);
  }

}
