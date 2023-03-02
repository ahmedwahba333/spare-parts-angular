import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbMainCenUsersComponent } from './db-main-cen-users.component';

describe('DbMainCenUsersComponent', () => {
  let component: DbMainCenUsersComponent;
  let fixture: ComponentFixture<DbMainCenUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbMainCenUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbMainCenUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
