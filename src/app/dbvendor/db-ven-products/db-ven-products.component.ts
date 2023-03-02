import { Component, OnInit } from '@angular/core';
import { search, sortLabel } from '../myFunctions';

@Component({
  selector: 'app-db-ven-products',
  templateUrl: './db-ven-products.component.html',
  styleUrls: ['./db-ven-products.component.css']
})
export class DbVenProductsComponent implements OnInit {
  private sort = new sortLabel;
  search = new search;
  private label: any;
  ngOnInit(): void {
    this.sort.jQueryLogic();
  }
}
