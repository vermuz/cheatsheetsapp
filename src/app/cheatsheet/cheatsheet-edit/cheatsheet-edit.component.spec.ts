import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatsheetEditComponent } from './cheatsheet-edit.component';

describe('CheatsheetEditComponent', () => {
  let component: CheatsheetEditComponent;
  let fixture: ComponentFixture<CheatsheetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheatsheetEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatsheetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
