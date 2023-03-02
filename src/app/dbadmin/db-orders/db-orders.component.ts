import { Component, OnInit } from '@angular/core';
import { sortLabel,search } from '../myFunctions';
@Component({
  selector: 'app-db-orders',
  templateUrl: './db-orders.component.html',
  styleUrls: ['./db-orders.component.css'],
  
})
export class DbOrdersComponent implements OnInit {
  private sort = new sortLabel;
  search = new search;
  ngOnInit(): void {
    this.sort.jQueryLogic();
  }
}
