import { Component, OnInit } from '@angular/core';
import { search, sortLabel } from '../myFunctions';

@Component({
  selector: 'app-db-cat',
  templateUrl: './db-cat.component.html',
  styleUrls: ['./db-cat.component.css']
})
export class DbCatComponent implements OnInit{
  private sort = new sortLabel;
  search = new search;
  private label: any;
  ngOnInit(): void {
    this.sort.jQueryLogic();
  }
}
