import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaddcatComponent } from './faddcat.component';

describe('FaddcatComponent', () => {
  let component: FaddcatComponent;
  let fixture: ComponentFixture<FaddcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaddcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaddcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
