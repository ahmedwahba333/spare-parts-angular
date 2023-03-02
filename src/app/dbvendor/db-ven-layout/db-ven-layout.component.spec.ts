import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbVenLayoutComponent } from './db-ven-layout.component';

describe('DbVenLayoutComponent', () => {
  let component: DbVenLayoutComponent;
  let fixture: ComponentFixture<DbVenLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbVenLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbVenLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
