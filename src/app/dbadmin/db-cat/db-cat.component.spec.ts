import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbCatComponent } from './db-cat.component';

describe('DbCatComponent', () => {
  let component: DbCatComponent;
  let fixture: ComponentFixture<DbCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
