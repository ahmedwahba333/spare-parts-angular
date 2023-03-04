import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardlistMaintainceComponent } from './cardlist-maintaince/cardlist-maintaince.component';
import { DetalisMaintainaceComponent } from './detalis-maintainace/detalis-maintainace.component';
import { IndexComponent } from './index/index.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  { path: '',component:CardlistMaintainceComponent },
  {
    path: '',
    loadChildren: () => import('./dbadmin/dbadmin.module').then(m => m.DBAdminModule)
  },
  {
    path: '',
    loadChildren: () => import('./dbvendor/dbvendor.module').then(m => m.DbvendorModule)
  },{
    path:"",
    component: IndexComponent
  },
  {
    path:"store",
    component: ProductListComponent
  },
  {
    path:"product details/:id",
    component: ProductDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
