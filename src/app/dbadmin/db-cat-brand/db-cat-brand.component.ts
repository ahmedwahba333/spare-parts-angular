import { Component } from '@angular/core';
import { search, sortLabel } from '../myFunctions';

@Component({
  selector: 'app-db-cat-brand',
  templateUrl: './db-cat-brand.component.html',
  styleUrls: ['./db-cat-brand.component.css']
})
export class DbCatBrandComponent {
  private sort = new sortLabel;
  search = new search;
  private label: any;
  ngOnInit(): void {
    this.sort.jQueryLogic();
  }
}
