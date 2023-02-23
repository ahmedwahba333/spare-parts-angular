import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryMaintainceComponent } from './catagory-maintaince.component';

describe('CatagoryMaintainceComponent', () => {
  let component: CatagoryMaintainceComponent;
  let fixture: ComponentFixture<CatagoryMaintainceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoryMaintainceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatagoryMaintainceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
