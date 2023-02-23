import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardlistMaintainceComponent } from './cardlist-maintaince/cardlist-maintaince.component';
import { DetalisMaintainaceComponent } from './detalis-maintainace/detalis-maintainace.component';

const routes: Routes = [
   { path: '',component:CardlistMaintainceComponent },


  { path: 'maintainceDetalis/:id',component:DetalisMaintainaceComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
