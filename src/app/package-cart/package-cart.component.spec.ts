import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageCartComponent } from './package-cart.component';

describe('PackageCartComponent', () => {
  let component: PackageCartComponent;
  let fixture: ComponentFixture<PackageCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
