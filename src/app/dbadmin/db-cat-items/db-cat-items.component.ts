import { Component, OnInit } from '@angular/core';
import { sortLabel, search } from '../myFunctions';
@Component({
  selector: 'app-db-cat-items',
  templateUrl: './db-cat-items.component.html',
  styleUrls: ['./db-cat-items.component.css']
})
export class DbCatItemsComponent implements OnInit {
  private sort = new sortLabel;
  search = new search;
  private label: any;
  ngOnInit(): void {
    this.sort.jQueryLogic();
  }
}
