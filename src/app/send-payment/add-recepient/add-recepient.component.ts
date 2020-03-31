import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface MobileBank {
  name: string;
  slug: string;
}
@Component({
  selector: 'app-add-recepient',
  templateUrl: './add-recepient.component.html',
  styleUrls: ['./add-recepient.component.scss'],
})
export class AddRecepientComponent implements OnInit {
  public title: string;
  public recepient_name: string;
  public recepient_email: string;
  public recepient_country: string;
  public recepient_address: string;
  public recepient_city: string;
  public recepient_postCode: string;
  public selectTab: string;
  public mobileBankingOptions: MobileBank[];
  public bankingOptions: MobileBank[];
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.title = '';
    this.selectTab = 'bank';
    this.mobileBankingOptions = [
      {
        name: 'Equitel',
        slug: 'equitel'
      },
      {
        name: 'M-Pesa',
        slug: 'mpesa'
      },
      {
        name: 'Airtel Money',
        slug: 'airtel-money'
      },
      {
        name: 'Olla',
        slug: 'olla'
      },
    ];
    this.bankingOptions = [
      {
        name: 'Equity Bank',
        slug: 'equity'
      },
      {
        name: 'Standard Chartered Bank',
        slug: 'stc'
      },
      {
        name: 'Barclays Bank',
        slug: 'barclays'
      },
      {
        name: 'CBA bank',
        slug: 'cba'
      },
    ];
  }

  backRedirect() {
    this.router.navigateByUrl('/account/send-payment/select-recepient');
  }
  continue() {
    this.router.navigateByUrl('/account/send-payment/select-payment');
  }
  segmentChanged($event) {
    this.selectTab = $event.detail.value;
  }

}
