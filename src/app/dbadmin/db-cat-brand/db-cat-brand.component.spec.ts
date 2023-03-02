import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbCatBrandComponent } from './db-cat-brand.component';

describe('DbCatBrandComponent', () => {
  let component: DbCatBrandComponent;
  let fixture: ComponentFixture<DbCatBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbCatBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbCatBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
