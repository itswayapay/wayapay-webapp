import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
})
export class PinComponent implements OnInit {
  public title: string;
  @ViewChild('input1', { static: false }) input1: ElementRef;
  @ViewChild('input2', { static: false }) input2: ElementRef;
  @ViewChild('input3', { static: false }) input3: ElementRef;
  @ViewChild('input4', { static: false }) input4: ElementRef;
  private pin: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.title = '';
  }
  updateList(currentBox, nextBox) {
    const currentLength = currentBox.value.length;
    const maxLength = Number(currentBox.getAttribute('maxLength'));
    if (currentLength === maxLength) {
      nextBox.focus();
    }
  }
  updateLast(currentBox) {
    const currentLength = currentBox.value.length;
    const maxLength = Number(currentBox.getAttribute('maxLength'));
    const value1 = this.input1.nativeElement.value;
    const value2 = this.input2.nativeElement.value;
    const value3 = this.input3.nativeElement.value;
    if (value1 !== '' && value2 !== '' && value3 !== '') {
      if (currentLength === maxLength) {
        // tslint:disable-next-line:max-line-length
        this.pin = Number(`${this.input1.nativeElement.value}${this.input2.nativeElement.value}${this.input3.nativeElement.value}${this.input4.nativeElement.value}`);
        this.savePin();
      }
    } else {
      this.resetForm();
    }
  }
  savePin() {
    localStorage.setItem('pin_1', (this.pin).toString());
    this.roteToVerifyPin();
  }
  roteToVerifyPin() {
    return this.router.navigateByUrl('/auth/verify-pin', { state: { firstPin: this.pin } });
  }
  resetForm() {
    this.input1.nativeElement.value = '';
    this.input2.nativeElement.value = '';
    this.input3.nativeElement.value = '';
    this.input4.nativeElement.value = '';
    this.input1.nativeElement.focus();
  }

  backRedirect() {
    return this.router.navigateByUrl('/auth/verify');
  }

}
