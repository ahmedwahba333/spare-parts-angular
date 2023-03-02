import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dbadmin/dbadmin.module').then(m => m.DBAdminModule)
  },
  {
    path: '',
    loadChildren: () => import('./dbvendor/dbvendor.module').then(m => m.DbvendorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
