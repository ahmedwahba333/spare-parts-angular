import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { DbVenLayoutComponent } from './db-ven-layout/db-ven-layout.component';
import { DbVenHomeComponent } from './db-ven-home/db-ven-home.component';
import { DbVenOrdersComponent } from './db-ven-orders/db-ven-orders.component';
import { DbVenProductsComponent } from './db-ven-products/db-ven-products.component';
import { DbVenNavComponent } from './db-ven-nav/db-ven-nav.component';

const routes: Routes = [
  { path: "", redirectTo: "DBVen-Home", pathMatch: "full" },
  {path:"",component:DbVenLayoutComponent,children:[
    {path:"DBVen-Home",component:DbVenHomeComponent},
    {path:"DBVen-Orders",component:DbVenOrdersComponent},
    {path:"DBVen-Products",component:DbVenProductsComponent}
  ]}
];

@NgModule({
  declarations: [
    DbVenHomeComponent,
    DbVenLayoutComponent,
    DbVenOrdersComponent,
    DbVenProductsComponent,
    DbVenNavComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class DbvendorModule { }
