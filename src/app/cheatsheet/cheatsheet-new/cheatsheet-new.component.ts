import { Router } from '@angular/router';
import { CheatsheetService } from '../../shared/providers/cheatsheet.service';
import { LanguageService } from '../../shared/providers/language.service';
import { CategoryService } from '../../shared/providers/category.service';
import { ILanguage } from '../../shared/interfaces/ilanguage';
import { ICategory } from '../../shared/interfaces/icategory';
import { ICheatsheet } from '../../shared/interfaces/icheatsheet';
import { Component, OnInit } from '@angular/core';
import { AceEditorEventsService } from "../../shared/aceeditor/ace-editor-events";

@Component({
  selector: 'app-cheatsheet-new',
  templateUrl: './cheatsheet-new.component.html',
  styleUrls: ['./cheatsheet-new.component.scss']
})
export class CheatsheetNewComponent implements OnInit {
  cheatsheet: ICheatsheet = {
    title: '',
    comment: '',
    code: '',
    category: null,
    language: null
  };
  categories: ICategory[];
  languages: ILanguage[];

  constructor(
    private _categoryService: CategoryService,
    private _languageService: LanguageService,
    private _cheatsheetService: CheatsheetService,
    private router: Router,
    private _aceEditorEventsService: AceEditorEventsService
  ) { }

  ngOnInit() {
    this._categoryService.getAll().subscribe(
      categories => this.categories = categories,
      error => console.log(error)
    );

    this._languageService.getAll().subscribe(
      languages => this.languages = languages,
      error => console.log(error)
    );
  }

  create() {
    this._cheatsheetService.create(this.cheatsheet).subscribe(
      cheatsheet => this.router.navigate(['/cheatsheets']),
      error => console.log(error)
    );
  }

  keyupTinyEditor(text: string){
    this.cheatsheet.comment = text;
  }

  changeAceEditor(text: string){
    this.cheatsheet.code = text;
  }

  aceEditorSetExtension() {
    this._aceEditorEventsService.getChangeExtension().emit(this.cheatsheet.language.extension);
  }
}
