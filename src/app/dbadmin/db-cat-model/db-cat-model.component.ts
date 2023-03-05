import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
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
  Models : any[]=[]
  constructor(private api : ApiService){}


  ngOnInit(): void {
    this.sort.jQueryLogic();
    this.getModels()
  }

  getModels(){
    this.api.getAllModel().subscribe(res=>{
      this.Models = res
    })
  }

  DeleteModel(id : any){
    this.api.delModel(id).subscribe(res=>{
      console.log(res)
      this.getModels()
    })
  }
}
