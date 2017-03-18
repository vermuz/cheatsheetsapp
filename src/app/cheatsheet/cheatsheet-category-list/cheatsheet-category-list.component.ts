import { ICategory } from '../../shared/interfaces/icategory';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheatsheet-category-list',
  templateUrl: './cheatsheet-category-list.component.html',
  styleUrls: ['./cheatsheet-category-list.component.scss']
})
export class CheatsheetCategoryListComponent implements OnInit {
  category: ICategory;
  filterSearch: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.category = this.route.snapshot.data['category'];
  }

}
