import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlistMaintainceComponent } from './cardlist-maintaince.component';

describe('CardlistMaintainceComponent', () => {
  let component: CardlistMaintainceComponent;
  let fixture: ComponentFixture<CardlistMaintainceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardlistMaintainceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardlistMaintainceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
