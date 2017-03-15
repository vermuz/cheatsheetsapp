import { LanguageModalComponent } from '../../shared/modals/language-modal/language-modal.component';
import { UserService } from '../../shared/providers/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LanguageService } from '../../shared/providers/language.service';
import { IUser } from '../../shared/interfaces/iuser';
import { ILanguage } from '../../shared/interfaces/ilanguage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent implements OnInit {
  languages: ILanguage[];
  user:IUser;

  constructor(
    private _languageService: LanguageService,
    private _userService: UserService,
    private _modalLanguage: NgbModal
    ) { }

  ngOnInit() {
    this._userService.getProfile().subscribe(
      user => this.user = user,
      error => console.log(error)
    )

    this._languageService.getAll().subscribe(
      languages => this.languages = languages,
      error => console.log(error)
    );
  }

  create() {
    let language: ILanguage = {name: '', extension: ''};

    const modalRef = this._modalLanguage.open(LanguageModalComponent);

    modalRef.componentInstance.title = "Nuevo lenguage";
    modalRef.componentInstance.language = language;

    return modalRef.result.then(
      name => {
        this._languageService.create(language.name, language.extension).subscribe(
          language => this.languages.push(language),
          error => console.log(error)
        );
      }
    ).catch(() => null);
  }

  edit(language: ILanguage) {
    const modalRef = this._modalLanguage.open(LanguageModalComponent);

    modalRef.componentInstance.title = "Nuevo lenguage";
    modalRef.componentInstance.language = language;

    return modalRef.result.then(
      () => {
        this._languageService.edit(language.id, language.name, language.extension).subscribe(
          () => null,
          error => console.log(error)
        );
      }
    ).catch(() => null);
  }

  delete(language: ILanguage) {
    this._languageService.delete(language.id).subscribe(
      ok => {
        this.languages = this.languages.filter(l => {
          if(l.id !== language.id) return l;
        });
      },
      error => console.log(error)
    );
  }

}
