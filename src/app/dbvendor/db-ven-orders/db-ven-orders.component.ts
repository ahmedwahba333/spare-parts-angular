import { Component, OnInit } from '@angular/core';
import { search, sortLabel } from '../myFunctions';

@Component({
  selector: 'app-db-ven-orders',
  templateUrl: './db-ven-orders.component.html',
  styleUrls: ['./db-ven-orders.component.css']
})
export class DbVenOrdersComponent implements OnInit {
  private sort = new sortLabel;
  search = new search;
  ngOnInit(): void {
    this.sort.jQueryLogic();
  }
}
