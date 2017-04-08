import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextWashdayComponent } from './next-washday.component';

describe('NextWashdayComponent', () => {
  let component: NextWashdayComponent;
  let fixture: ComponentFixture<NextWashdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextWashdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextWashdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
