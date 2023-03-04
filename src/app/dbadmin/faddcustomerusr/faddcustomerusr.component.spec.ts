import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaddcustomerusrComponent } from './faddcustomerusr.component';

describe('FaddcustomerusrComponent', () => {
  let component: FaddcustomerusrComponent;
  let fixture: ComponentFixture<FaddcustomerusrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaddcustomerusrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaddcustomerusrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
