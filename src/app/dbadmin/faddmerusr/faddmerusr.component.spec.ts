import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaddmerusrComponent } from './faddmerusr.component';

describe('FaddmerusrComponent', () => {
  let component: FaddmerusrComponent;
  let fixture: ComponentFixture<FaddmerusrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaddmerusrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaddmerusrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
