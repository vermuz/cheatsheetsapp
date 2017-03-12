import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatsheetListComponent } from './cheatsheet-list.component';

describe('CheatsheetListComponent', () => {
  let component: CheatsheetListComponent;
  let fixture: ComponentFixture<CheatsheetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheatsheetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatsheetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
