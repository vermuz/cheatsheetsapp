import { ActivatedRoute } from '@angular/router';
import { ICheatsheet } from '../../shared/interfaces/icheatsheet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheatsheet-view',
  templateUrl: './cheatsheet-view.component.html',
  styleUrls: ['./cheatsheet-view.component.scss']
})
export class CheatsheetViewComponent implements OnInit {
  cheatsheet: ICheatsheet;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.cheatsheet = this.route.snapshot.data['cheatsheet'];
  }

}
