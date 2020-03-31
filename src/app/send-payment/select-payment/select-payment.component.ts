import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.component.html',
  styleUrls: ['./select-payment.component.scss'],
})
export class SelectPaymentComponent implements OnInit {
  public title: string = 'Select Payment';
  public pay_amt: string;
  public selectCard: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.pay_amt = '1,004.00';
    this.selectCard = '*** *** *** 5639'
  }

  backRedirect() {
    this.router.navigateByUrl('/account/send-payment/review/maroria-hempston');
  }
  navigateToAdd() {
    this.router.navigateByUrl('/payment/add');
  }
  continue() {
    this.router.navigateByUrl('/account/send-payment/payment-success');
  }

}
