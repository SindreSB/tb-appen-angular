import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashlistGeneratorComponent } from './washlist-generator.component';

describe('WashlistGeneratorComponent', () => {
  let component: WashlistGeneratorComponent;
  let fixture: ComponentFixture<WashlistGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashlistGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashlistGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
