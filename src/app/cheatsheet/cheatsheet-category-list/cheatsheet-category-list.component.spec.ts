import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatsheetCategoryListComponent } from './cheatsheet-category-list.component';

describe('CheatsheetCategoryListComponent', () => {
  let component: CheatsheetCategoryListComponent;
  let fixture: ComponentFixture<CheatsheetCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheatsheetCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatsheetCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
