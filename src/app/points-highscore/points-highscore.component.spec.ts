import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsHighscoreComponent } from './points-highscore.component';

describe('PointsHighscoreComponent', () => {
  let component: PointsHighscoreComponent;
  let fixture: ComponentFixture<PointsHighscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsHighscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsHighscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
