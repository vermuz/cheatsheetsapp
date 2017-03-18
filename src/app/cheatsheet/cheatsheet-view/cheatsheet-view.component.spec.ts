import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatsheetViewComponent } from './cheatsheet-view.component';

describe('CheatsheetViewComponent', () => {
  let component: CheatsheetViewComponent;
  let fixture: ComponentFixture<CheatsheetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheatsheetViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatsheetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
