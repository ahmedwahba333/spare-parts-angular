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
import { FaddcatComponent } from './faddcat/faddcat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FaddcatbrandComponent } from './faddcatbrand/faddcatbrand.component';
import { FaddcatmodelComponent } from './faddcatmodel/faddcatmodel.component';
import { FaddcatitemsComponent } from './faddcatitems/faddcatitems.component';
import { FaddmerusrComponent } from './faddmerusr/faddmerusr.component';
import { FaddmaincenusrComponent } from './faddmaincenusr/faddmaincenusr.component';
import { FaddcustomerusrComponent } from './faddcustomerusr/faddcustomerusr.component';



const routes: Routes = [
  { path: "", redirectTo: "DBAdm-Home", pathMatch: "full" },
  {
    path: '', component: DblayoutComponent, children: [
      { path: "DBAdm-Home", component: DbHomeComponent },
      { path: 'DBAdm-CategoryItems', component: DbCatItemsComponent },
      { path: 'DBAdm-CategoryItems/DBAdm-Add-Products', component: FaddcatitemsComponent },
      { path: 'DBAdm-Orders', component: DbOrdersComponent },
      { path: 'DBAdm-MerUsers', component: DbMerUsersComponent },
      { path: 'DBAdm-MerUsers/DBAdm-Add-MerchantUser', component: FaddmerusrComponent },
      { path: 'DBAdm-MainCenUsers', component: DbMainCenUsersComponent },
      { path: 'DBAdm-MainCenUsers/DBAdm-Add-MainCenUser', component: FaddmaincenusrComponent },
      { path: 'DBAdm-Customers', component: DbCustomersComponent },
      { path: 'DBAdm-Customers/DBAdm-Add-CustomerUser', component: FaddcustomerusrComponent },
      { path: 'DBAdm-Categories', component: DbCatComponent },
      { path: 'DBAdm-Categories/DBAdm-Add-Category', component: FaddcatComponent },
      { path: 'DBAdm-CategoryBrands', component: DbCatBrandComponent },
      { path: 'DBAdm-CategoryBrands/DBAdm-Add-CategoryBrand', component: FaddcatbrandComponent },
      { path: 'DBAdm-CategoryModels', component: DbCatModelComponent },
      { path: 'DBAdm-CategoryModels/DBAdm-Add-CategoryModel', component: FaddcatmodelComponent },
      
    ]
  },
  // { path: 'DBAdm-Add-Category', component: FaddcatComponent },
  // {
  //   path: 'DBAdm-Categories', component: DbCatComponent, children:[
  //     { path: 'DBAdm-Add-Category', component: FaddcatComponent },
  //   ]
  // }
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
    FaddcatComponent,
    FaddcatbrandComponent,
    FaddcatmodelComponent,
    FaddcatitemsComponent,
    FaddmerusrComponent,
    FaddmaincenusrComponent,
    FaddcustomerusrComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
})
export class DBAdminModule { }
export { DbHomeComponent };

