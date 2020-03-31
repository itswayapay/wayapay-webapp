import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-payment',
  templateUrl: './send-payment.page.html',
  styleUrls: ['./send-payment.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SendPaymentPage implements OnInit {
  public title: string;
  public selectCurrency: string;
  public payCurrency: string;
  public sendSuccessful: boolean;
  public paymentLoading: boolean;

  constructor(private router: Router) {
    this.title = 'Send Payment';
    this.selectCurrency = 'KES';
    this.payCurrency = 'us';
    this.paymentLoading = false;
    this.sendSuccessful = false;
  }

  ngOnInit() {
  }
  backRedirect() {
    return this.router.navigateByUrl('/account/home');
  }
  payNow() {
    this.paymentLoading = true;
    const setIntter = setTimeout(() => {
      this.sendSuccessful = true;
      this.paymentLoading = false;
    }, 2000);
  }
  routeTo() {
    return this.router.navigateByUrl('/account/transactions');
  }

}
