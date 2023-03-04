import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaddcatbrandComponent } from './faddcatbrand.component';

describe('FaddcatbrandComponent', () => {
  let component: FaddcatbrandComponent;
  let fixture: ComponentFixture<FaddcatbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaddcatbrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaddcatbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
