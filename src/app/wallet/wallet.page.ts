import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface DummyAccount {
  country: string;
  code: string;
  currency: string;
  slug: string;
  amount: number;
}

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  public title: string;
  public dummyAcc: DummyAccount[];

  constructor(private router: Router) {
    this.title = 'Wallets';
  }

  ngOnInit() {
    this.dummyAcc = [{
      country: 'USA',
      code: 'us',
      currency: 'USA',
      slug: 'us-bank-card',
      amount: 7003.89,
    }, {
      country: 'KENYA',
      code: 'ke',
      currency: 'KES',
      slug: 'ke-bank-card',
      amount: 197003.89
    }];
  }
  redirectToDetails(i) {
    return this.router.navigateByUrl(`/account/wallet/${i.slug}`);
  }
  backRedirect() {
    return this.router.navigateByUrl('/account/home');
  }
  // addWallet(slug) {
  //   return this.router.navigateByUrl(`/account/wallet/${slug}`);
  // }
  addBalance() {
    this.router.navigateByUrl('/payment/add');
  }

  redirectToAdd() {
    this.router.navigateByUrl('/account/wallet/us-bank-card');
  }
  redirectToSend() {
    this.router.navigateByUrl('/account/send-payment');
  }
  redirectToConvert() {
    // this.router.navigateByUrl('/account/send-payment');
  }
}
