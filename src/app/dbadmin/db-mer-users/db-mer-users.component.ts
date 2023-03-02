import { Component } from '@angular/core';
import {sortLabel,search} from '../myFunctions';
@Component({
  selector: 'app-db-mer-users',
  templateUrl: './db-mer-users.component.html',
  styleUrls: ['./db-mer-users.component.css']
})
export class DbMerUsersComponent {
  private sort= new sortLabel;
  search = new search;
  ngOnInit(): void {
   this.sort.jQueryLogic();
  }
}
