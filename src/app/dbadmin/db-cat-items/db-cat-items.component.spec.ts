import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbCatItemsComponent } from './db-cat-items.component';

describe('DbCatItemsComponent', () => {
  let component: DbCatItemsComponent;
  let fixture: ComponentFixture<DbCatItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbCatItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbCatItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
