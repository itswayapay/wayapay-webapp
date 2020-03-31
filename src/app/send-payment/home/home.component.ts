import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-payment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSendMoneyComponent implements OnInit {
  public title: string;
  public sendCurrency: string;
  public receiveCurrency: string;
  public send_amount: number;
  public receive_amount: number;
  public summaryItem: boolean;
  public toConversionRate: number;
  public fromConversionRate: number;
  toExchangeRate: number;
  fromExchangeRate: number;
  constructor(public router: Router) {
    this.title = 'Send Money';
    this.sendCurrency = 'us';
    this.receiveCurrency = 'ke';
  }

  ngOnInit() {
    this.summaryItem = false;
  }

  backRedirect() {
    this.router.navigateByUrl('/account');
  }
  continue() {
    this.router.navigateByUrl('/account/send-payment/select-recepient');
  }
  toggleSummary() {
    this.summaryItem ? this.summaryItem = false : this.summaryItem = true;
  }
  toCurrencyChange(value) {
    switch (value) {
      case 'ke':
        if (this.receiveCurrency === 'ke') {
          this.receive_amount = Number(this.send_amount);
        } else if (this.receiveCurrency === 'us') {
          const calc = Number(this.send_amount * 103.71);
          this.receive_amount = Number(calc);
        } else {
          this.receive_amount = 0;
        }
        break;
      case 'us':
        if (this.receiveCurrency === 'ke') {
          const calc = Number(Number(this.send_amount * 103.71).toFixed(2));
          this.receive_amount = Number(calc);
        } else if (this.receiveCurrency === 'us') {
          this.receive_amount = Number(this.send_amount);
        } else {
          this.receive_amount = 0;
        }
        break;
      default:
        this.receive_amount = Number(this.send_amount || 0);
        break;
    }
  }
  fromCurrencyChange(value) {
    switch (value) {
      case 'ke':
        if (this.sendCurrency === 'ke') {
          this.send_amount = Number(this.receive_amount);
        } else if (this.sendCurrency === 'us') {
          const calc = Number(this.receive_amount / 103.71);
          this.send_amount = Number(calc);
        } else {
          this.send_amount = 0;
        }
        break;
      case 'us':
        if (this.sendCurrency === 'ke') {
          const calc = Number(Number(this.receive_amount * 103.71).toFixed(2));
          this.send_amount = Number(calc);
        } else if (this.sendCurrency === 'us') {
          this.send_amount = Number(this.receive_amount);
        } else {
          this.send_amount = 0;
        }
        break;
      default:
        this.receive_amount = Number(this.send_amount || 0);
        break;
    }
  }

}
