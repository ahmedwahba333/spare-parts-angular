import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaddmaincenusrComponent } from './faddmaincenusr.component';

describe('FaddmaincenusrComponent', () => {
  let component: FaddmaincenusrComponent;
  let fixture: ComponentFixture<FaddmaincenusrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaddmaincenusrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaddmaincenusrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
