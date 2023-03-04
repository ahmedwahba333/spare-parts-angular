import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaddproductComponent } from './faddproduct.component';

describe('FaddproductComponent', () => {
  let component: FaddproductComponent;
  let fixture: ComponentFixture<FaddproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaddproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
