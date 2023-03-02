import { Component } from '@angular/core';
import { search,sortLabel } from '../myFunctions';

@Component({
  selector: 'app-db-cat-model',
  templateUrl: './db-cat-model.component.html',
  styleUrls: ['./db-cat-model.component.css']
})
export class DbCatModelComponent {
  private sort = new sortLabel;
  search = new search;
  private label: any;
  ngOnInit(): void {
    this.sort.jQueryLogic();
  }
}
