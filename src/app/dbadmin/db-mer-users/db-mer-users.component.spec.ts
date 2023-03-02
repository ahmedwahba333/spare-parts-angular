import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbMerUsersComponent } from './db-mer-users.component';

describe('DbMerUsersComponent', () => {
  let component: DbMerUsersComponent;
  let fixture: ComponentFixture<DbMerUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbMerUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbMerUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
