import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public title: string;

  @ViewChild('input1', { static: false }) input1: ElementRef;
  @ViewChild('input2', { static: false }) input2: ElementRef;
  @ViewChild('input3', { static: false }) input3: ElementRef;
  @ViewChild('input4', { static: false }) input4: ElementRef;

  constructor(private router: Router) {
    this.title = 'Add USD';
  }

  ngOnInit() { }

  backRedirect() {
    return this.router.navigateByUrl('/account/wallet/asdasdas');
  }

  updateList(currentBox, nextBox) {
    const currentLength = currentBox.value.length;
    const maxLength = currentBox.getAttribute('maxLength');
    if (currentLength == maxLength) {
      nextBox.focus();
    }
  }
  updateLast(currentBox) {
    const currentLength = currentBox.value.length;
    const maxLength = currentBox.getAttribute('maxLength');
    const value1 = this.input1.nativeElement.value;
    const value2 = this.input2.nativeElement.value;
    const value3 = this.input3.nativeElement.value;
    if (value1 !== '' && value2 !== '' && value3 !== '') {
      if (currentLength == maxLength) {
        this.submitVerify();
      }
    } else {
      this.resetForm();
    }
  }
  submitVerify() {
    this.router.navigateByUrl('/account/wallet');
  }

  resetForm() {
    this.input1.nativeElement.value = '';
    this.input2.nativeElement.value = '';
    this.input3.nativeElement.value = '';
    this.input4.nativeElement.value = '';
    this.input1.nativeElement.focus();
  }

}
