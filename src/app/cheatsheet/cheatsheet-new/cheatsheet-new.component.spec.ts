import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatsheetNewComponent } from './cheatsheet-new.component';

describe('CheatsheetNewComponent', () => {
  let component: CheatsheetNewComponent;
  let fixture: ComponentFixture<CheatsheetNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheatsheetNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatsheetNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
