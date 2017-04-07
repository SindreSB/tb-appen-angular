import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashlistOverviewComponent } from './washlist-overview.component';

describe('WashlistOverviewComponent', () => {
  let component: WashlistOverviewComponent;
  let fixture: ComponentFixture<WashlistOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashlistOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashlistOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
