import { ICheatsheet } from '../../shared/interfaces/icheatsheet';
import { CheatsheetService } from '../../shared/providers/cheatsheet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheatsheet-list',
  templateUrl: './cheatsheet-list.component.html',
  styleUrls: ['./cheatsheet-list.component.scss']
})
export class CheatsheetListComponent implements OnInit {
  cheatsheets: ICheatsheet[];

  constructor(private _cheatsheetService: CheatsheetService) { }

  ngOnInit() {
    this._cheatsheetService.getAll().subscribe(
      cheatsheets => this.cheatsheets = cheatsheets,
      error => console.log(error)
    );
  }

  create() {

  }

  edit() {

  }

  delete(cheatsheet: ICheatsheet) {
    this._cheatsheetService.delete(cheatsheet.id).subscribe(
      ok => {
        this.cheatsheets = this.cheatsheets.filter(c => {
          if(c.id !== cheatsheet.id) return c;
        });
      },
      error => console.log(error)
    );
  }

}
