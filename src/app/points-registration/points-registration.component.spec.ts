import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsRegistrationComponent } from './points-registration.component';

describe('PointsRegistrationComponent', () => {
  let component: PointsRegistrationComponent;
  let fixture: ComponentFixture<PointsRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
