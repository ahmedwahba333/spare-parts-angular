import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DblayoutComponent } from './dblayout.component';

describe('DblayoutComponent', () => {
  let component: DblayoutComponent;
  let fixture: ComponentFixture<DblayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DblayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DblayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
