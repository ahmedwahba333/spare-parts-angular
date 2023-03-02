import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DbHomeComponent } from './db-home/db-home.component';
import { DbCatItemsComponent } from './db-cat-items/db-cat-items.component';
import { DbOrdersComponent } from './db-orders/db-orders.component';
import { DbMerUsersComponent } from './db-mer-users/db-mer-users.component';
import { DbMainCenUsersComponent } from './db-main-cen-users/db-main-cen-users.component';
import { DbCustomersComponent } from './db-customers/db-customers.component';
import { NavComponent } from './nav/nav.component';
import { DblayoutComponent } from './dblayout/dblayout.component';
import { DbCatComponent } from './db-cat/db-cat.component';
import { DbCatBrandComponent } from './db-cat-brand/db-cat-brand.component';
import { DbCatModelComponent } from './db-cat-model/db-cat-model.component';




const routes: Routes = [
  { path: "", redirectTo: "DBAdm-Home", pathMatch: "full" },
  {
    path: '', component: DblayoutComponent, children: [
      { path: "DBAdm-Home", component: DbHomeComponent },
      { path: 'DBAdm-CategoryItems', component: DbCatItemsComponent },
      { path: 'DBAdm-Orders', component: DbOrdersComponent },
      { path: 'DBAdm-MerUsers', component: DbMerUsersComponent },
      { path: 'DBAdm-MainCenUsers', component: DbMainCenUsersComponent },
      { path: 'DBAdm-Customers', component: DbCustomersComponent },
      { path: 'DBAdm-Categories', component: DbCatComponent },
      { path: 'DBAdm-CategoryBrands', component: DbCatBrandComponent },
      { path: 'DBAdm-CategoryModels', component: DbCatModelComponent }
    ]
  },
];

@NgModule({
  declarations: [
    DblayoutComponent,
    DbHomeComponent,
    DbCatItemsComponent,
    DbOrdersComponent,
    DbMerUsersComponent,
    DbMainCenUsersComponent,
    DbCustomersComponent,
    NavComponent,
    DbCatComponent,
    DbCatBrandComponent,
    DbCatModelComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ],
  exports: [RouterModule],
})
export class DBAdminModule { }
export { DbHomeComponent };

