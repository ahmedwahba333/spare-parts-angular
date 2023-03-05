import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
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
  categories : any[] =[]


  constructor(private api : ApiService){}
  ngOnInit(): void {
    this.sort.jQueryLogic();
    this.getcategory()
  }

  getcategory(){
    this.api.getAllCategories().subscribe(res=>{
this.categories = res
      console.log(this.categories)
    })
  }

  DeleteCat(id : any){
    this.api.delCategory(id).subscribe(res=>{
      console.log(res)
      this.getcategory()
    })
  }

  
}
