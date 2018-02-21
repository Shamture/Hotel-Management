import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InPremiseComponent } from './in-premise.component';

describe('InPremiseComponent', () => {
  let component: InPremiseComponent;
  let fixture: ComponentFixture<InPremiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InPremiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InPremiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
