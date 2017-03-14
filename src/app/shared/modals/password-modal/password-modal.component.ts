import { IUser } from '../../interfaces/iuser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-modal',
  templateUrl: './password-modal.component.html',
  styleUrls: ['./password-modal.component.scss']
})
export class PasswordModalComponent implements OnInit {
  @Input() user: IUser;
  confirmpassword: string = '';

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  change() {
  }

}
