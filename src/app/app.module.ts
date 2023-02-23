import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaintainCenterComponent } from './maintain-center/maintain-center.component';
import { CardlistMaintainceComponent } from './cardlist-maintaince/cardlist-maintaince.component';
import { CatagoryMaintainceComponent } from './catagory-maintaince/catagory-maintaince.component';
import { DetalisMaintainaceComponent } from './detalis-maintainace/detalis-maintainace.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MaintainCenterComponent,
    CardlistMaintainceComponent,
    CatagoryMaintainceComponent,
    DetalisMaintainaceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
