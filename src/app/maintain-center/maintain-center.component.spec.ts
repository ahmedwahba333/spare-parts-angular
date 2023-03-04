import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCenterComponent } from './maintain-center.component';

describe('MaintainCenterComponent', () => {
  let component: MaintainCenterComponent;
  let fixture: ComponentFixture<MaintainCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintainCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintainCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
