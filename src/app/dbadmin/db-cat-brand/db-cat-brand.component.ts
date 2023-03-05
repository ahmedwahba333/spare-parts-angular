import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
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
  Brands : any[]=[]

  constructor(private api : ApiService){}
  ngOnInit(): void {
    this.sort.jQueryLogic();
    this.getBrands()
  }


  getBrands(){
    this.api.getAllBrands().subscribe(res=>{
      this.Brands=res
    })
  }

  DeleteBrand(id : any){
    this.api.delBrands(id).subscribe(res=>{
      console.log(res)
      this.getBrands()
    })
  }
}
