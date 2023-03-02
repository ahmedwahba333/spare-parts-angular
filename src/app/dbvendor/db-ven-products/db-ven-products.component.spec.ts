import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbVenProductsComponent } from './db-ven-products.component';

describe('DbVenProductsComponent', () => {
  let component: DbVenProductsComponent;
  let fixture: ComponentFixture<DbVenProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbVenProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbVenProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
