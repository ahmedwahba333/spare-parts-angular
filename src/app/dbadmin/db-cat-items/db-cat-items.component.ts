import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
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
  Product : any[]=[]
  constructor(private api : ApiService){}
  ngOnInit(): void {
    this.sort.jQueryLogic();
    this.AllProduct()
  }

  AllProduct(){
  this.api.getProduct().subscribe(res =>{
console.log(res.product)
this.Product = res.product  
})
  // console.log()
  }

}
