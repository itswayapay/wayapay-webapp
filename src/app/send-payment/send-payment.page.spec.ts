import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPaymentPage } from './send-payment.page';

describe('SendPaymentPage', () => {
  let component: SendPaymentPage;
  let fixture: ComponentFixture<SendPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPaymentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
