import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalisMaintainaceComponent } from './detalis-maintainace.component';

describe('DetalisMaintainaceComponent', () => {
  let component: DetalisMaintainaceComponent;
  let fixture: ComponentFixture<DetalisMaintainaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalisMaintainaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalisMaintainaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
