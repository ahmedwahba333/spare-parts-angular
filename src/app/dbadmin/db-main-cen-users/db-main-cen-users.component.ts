import { Component,OnInit } from '@angular/core';
import { sortLabel,search } from '../myFunctions';
@Component({
  selector: 'app-db-main-cen-users',
  templateUrl: './db-main-cen-users.component.html',
  styleUrls: ['./db-main-cen-users.component.css']
})
export class DbMainCenUsersComponent implements OnInit{
private sort = new sortLabel;
search = new search;
ngOnInit(){
  this.sort.jQueryLogic();
}
}
