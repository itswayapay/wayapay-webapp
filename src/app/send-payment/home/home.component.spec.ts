import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSendMoneyComponent } from './home.component';

describe('HomeSendMoneyComponent', () => {
  let component: HomeSendMoneyComponent;
  let fixture: ComponentFixture<HomeSendMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSendMoneyComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSendMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
