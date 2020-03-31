import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss'],
})
export class PaymentSuccessComponent implements OnInit {
  public title: string;

  constructor(private router: Router) { }

  ngOnInit() { }

  backRedirect() {
    this.router.navigateByUrl('/account');
  }
  continue() {
    this.router.navigateByUrl('/account');
  }

}
