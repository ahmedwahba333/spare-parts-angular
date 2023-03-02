import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbCatModelComponent } from './db-cat-model.component';

describe('DbCatModelComponent', () => {
  let component: DbCatModelComponent;
  let fixture: ComponentFixture<DbCatModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbCatModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbCatModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
