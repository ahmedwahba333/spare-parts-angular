import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaddcatitemsComponent } from './faddcatitems.component';

describe('FaddcatitemsComponent', () => {
  let component: FaddcatitemsComponent;
  let fixture: ComponentFixture<FaddcatitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaddcatitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaddcatitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
