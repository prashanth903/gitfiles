import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponretComponent } from './couponret.component';

describe('CouponretComponent', () => {
  let component: CouponretComponent;
  let fixture: ComponentFixture<CouponretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
