import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbVenOrdersComponent } from './db-ven-orders.component';

describe('DbVenOrdersComponent', () => {
  let component: DbVenOrdersComponent;
  let fixture: ComponentFixture<DbVenOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbVenOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbVenOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
