import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaddcatmodelComponent } from './faddcatmodel.component';

describe('FaddcatmodelComponent', () => {
  let component: FaddcatmodelComponent;
  let fixture: ComponentFixture<FaddcatmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaddcatmodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaddcatmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
