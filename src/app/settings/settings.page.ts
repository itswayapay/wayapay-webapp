import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface DummyCard {
  name: string;
  default: boolean;
  cardImg: string;
  cardNumber: string;
  amtSent: number;
  selectDate: string;
  lastAmt: number;
  lastDate: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public title: string;
  public selectTab: string;
  public availableCards: DummyCard[];
  constructor(private router: Router) {
    this.title = 'Settings';
  }
  ngOnInit() {
    this.selectTab = 'accounts';
    this.availableCards = [
      {
        name: '1. VISA CARD - HSBA BANK LONDON',
        default: true,
        cardImg: '../../assets/payment/visa.png',
        cardNumber: '**** **** **** 0000',
        amtSent: 6367.15,
        selectDate: '3m',
        lastAmt: 473.15,
        lastDate: 'JAN 25, 2019',
      },
      {
        name: '2. MASTER CARD - BARCLAYS BANK',
        default: true,
        cardImg: '../../assets/payment/mastercard.png',
        cardNumber: '**** **** **** 9323',
        amtSent: 4323.15,
        selectDate: '1y',
        lastAmt: 3500.15,
        lastDate: 'JUL 20, 2019',
      }
    ];
  }
  backRedirect() {
    return this.router.navigateByUrl('/account/home');
  }
  segmentChanged($event) {
    this.selectTab = $event.detail.value;
  }
  addRedirect() {
    return this.router.navigateByUrl('/payment/add');
  }

}
