import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbOrdersComponent } from './db-orders.component';

// import { NavComponent } from '../nav/nav.component';

describe('DbOrdersComponent', () => {
  let component: DbOrdersComponent;
  let fixture: ComponentFixture<DbOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
