import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  public selectTab: string;
  public title: string;
  public paymentSuccess: boolean;
  public paymentLoading: boolean;
  public displayCardName: string;
  public cardName: string;
  public displayCardNumber: string;
  public cardNumber: string;
  public cardMonth: number;
  public cardYear: number;
  public cardCvv: number;
  public cardType: string;
  public cardTypeImg: string;
  constructor(private router: Router, private navCtrl: NavController) {
    this.displayCardName = 'ENTER NAME';
    this.cardNumber = '0000 0000 0000 0000';
    this.displayCardNumber = this.cardNumber.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, '');

    this.title = 'Add Payment';
    this.paymentLoading = false;
    this.paymentSuccess = false;
  }

  ngOnInit() {
    this.selectTab = 'credit-card';
  }

  backRedirect() {
    return this.navCtrl.back();
    // return this.router.navigateByUrl('/auth/verify');
  }

  segmentChanged($event) {
    this.selectTab = $event.detail.value;
  }

  paymentNext() { }
  addCard() {
    this.paymentLoading = true;
    const setPaymenttrue = setTimeout(() => {
      this.paymentSuccess = true;
      this.title = 'Success';
      this.paymentLoading = false;
    }, 2000);
  }
  routerToApp() {
    return this.router.navigateByUrl('/account/home');
  }
  sendPayment() {
    return this.router.navigateByUrl('/account/home');
  }
  updateCardNumber() {
    if (this.cardNumber) {
      if (this.cardNumber.toString().length > 16) {
        this.cardNumber = ((this.cardNumber).toString().slice(0, 15));
      }
      this.displayCardNumber = `${this.cardNumber}`.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, '');
      if (this.cardNumber.toString().length == 1) {
        this.updateCardType();
      }
    } else {
      this.displayCardNumber = '0000 0000 0000 0000';
    }
  }
  updateCardType() {
    const firstChar = this.displayCardNumber[0];
    switch (firstChar) {
      case ('3'):
        this.cardType = 'American Express Card';
        this.cardTypeImg = '../../../assets/payment/amex.png';
        break;
      case ('4'):
        this.cardType = 'Visa Card';
        this.cardTypeImg = '../../../assets/payment/visa.png';
        break;
      case ('5'):
        this.cardType = 'Master Card';
        this.cardTypeImg = '../../../assets/payment/mastercard.png';
        break;
      case ('6'):
        this.cardType = 'Discovery Card';
        this.cardTypeImg = '../../../assets/payment/discovery.png';
        break;
      default:
        this.cardTypeImg = '../../../assets/payment/disabled.png';
    }
  }

}
