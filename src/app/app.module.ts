import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule,NgbDropdownConfig, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MaintainCenterComponent } from './maintain-center/maintain-center.component';
import { CardlistMaintainceComponent } from './cardlist-maintaince/cardlist-maintaince.component';
import { CatagoryMaintainceComponent } from './catagory-maintaince/catagory-maintaince.component';
import { DetalisMaintainaceComponent } from './detalis-maintainace/detalis-maintainace.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    AppComponent,
    MaintainCenterComponent,
    CardlistMaintainceComponent,
    CatagoryMaintainceComponent,
    DetalisMaintainaceComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent,

    ProductListComponent,
      ProductCardComponent,
      ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgbDropdownModule,
  ],
  providers: [NgbDropdownConfig],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(config: NgbDropdownConfig) {
    config.autoClose = false;
  }
}
