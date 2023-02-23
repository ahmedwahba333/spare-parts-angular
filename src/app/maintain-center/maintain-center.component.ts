import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintain-center',
  templateUrl: './maintain-center.component.html',
  styleUrls: ['./maintain-center.component.css']
})
export class MaintainCenterComponent {
@Input() card:any;


constructor(private router:Router){

}
navigate(){
 let id=this.card.id;
this.router.navigate(['maintainceDetalis',id])

}
}
