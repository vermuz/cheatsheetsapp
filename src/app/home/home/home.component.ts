import { CheatsheetService } from '../../shared/providers/cheatsheet.service';
import { CategoryService } from '../../shared/providers/category.service';
import { ICheatsheet } from '../../shared/interfaces/icheatsheet';
import { ICategory } from '../../shared/interfaces/icategory';
import { Component, OnInit } from '@angular/core';

const MAX_CHEATSHETS_LATEST = 10;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: ICategory[];
  cheatsheetsLatest: ICheatsheet[];
  filterSearch:string = '';

  constructor(
    private _categoryService: CategoryService,
    private _cheatsheetService: CheatsheetService
    ) { }

  ngOnInit() {
    this._categoryService.getList().subscribe(
      categories => this.categories = categories
    );

    this._cheatsheetService.getLatest(MAX_CHEATSHETS_LATEST).subscribe(
      cheatsheets => this.cheatsheetsLatest = cheatsheets
    );
  }
}
