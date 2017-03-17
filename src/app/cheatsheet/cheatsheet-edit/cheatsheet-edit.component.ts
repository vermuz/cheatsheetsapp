import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ICheatsheet } from "../../shared/interfaces/icheatsheet";
import { ICategory } from "../../shared/interfaces/icategory";
import { ILanguage } from "../../shared/interfaces/ilanguage";
import { CategoryService } from "../../shared/providers/category.service";
import { LanguageService } from "../../shared/providers/language.service";
import { CheatsheetService } from "../../shared/providers/cheatsheet.service";
import { AceEditorEventsService } from "../../shared/aceeditor/ace-editor-events";

@Component({
  selector: 'app-cheatsheet-edit',
  templateUrl: './cheatsheet-edit.component.html',
  styleUrls: ['./cheatsheet-edit.component.scss']
})
export class CheatsheetEditComponent implements OnInit {
  cheatsheet: ICheatsheet;
  categories: ICategory[];
  languages: ILanguage[];

  constructor(
    private _categoryService: CategoryService,
    private _languageService: LanguageService,
    private _cheatsheetService: CheatsheetService,
    private router: Router,
    private _aceEditorEventsService: AceEditorEventsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cheatsheet = this.route.snapshot.data['cheatsheet'];
    
    this._categoryService.getAll().subscribe(
      categories => this.categories = categories,
      error => console.log(error)
    );

    this._languageService.getAll().subscribe(
      languages => this.languages = languages,
      error => console.log(error)
    );
  }

  update() {
    console.log(this.cheatsheet);
    this._cheatsheetService.edit(this.cheatsheet).subscribe(
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

  aceEditorSetOptions() {
    this._aceEditorEventsService.getChange().emit();
  }

  aceEditorSetExtension() {
    this._aceEditorEventsService.getChangeExtension().emit(this.cheatsheet.language.extension);
  }
}
