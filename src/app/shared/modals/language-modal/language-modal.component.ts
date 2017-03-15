import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ILanguage } from '../../interfaces/ilanguage';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-modal',
  templateUrl: './language-modal.component.html',
  styleUrls: ['./language-modal.component.scss']
})
export class LanguageModalComponent implements OnInit {
  @Input() language: ILanguage;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
