import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientsPage } from './recipients.page';

describe('RecipientsPage', () => {
  let component: RecipientsPage;
  let fixture: ComponentFixture<RecipientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
