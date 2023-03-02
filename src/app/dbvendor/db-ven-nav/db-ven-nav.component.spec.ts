import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbVenNavComponent } from './db-ven-nav.component';

describe('DbVenNavComponent', () => {
  let component: DbVenNavComponent;
  let fixture: ComponentFixture<DbVenNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbVenNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbVenNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
