import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashlistDisplayComponent } from './washlist-display.component';

describe('WashlistDisplayComponent', () => {
  let component: WashlistDisplayComponent;
  let fixture: ComponentFixture<WashlistDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashlistDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashlistDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
