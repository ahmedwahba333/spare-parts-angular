import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbVenHomeComponent } from './db-ven-home.component';

describe('DbVenHomeComponent', () => {
  let component: DbVenHomeComponent;
  let fixture: ComponentFixture<DbVenHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbVenHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbVenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
