import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashlistInputComponent } from './washlist-input.component';

describe('WashlistInputComponent', () => {
  let component: WashlistInputComponent;
  let fixture: ComponentFixture<WashlistInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashlistInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashlistInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
