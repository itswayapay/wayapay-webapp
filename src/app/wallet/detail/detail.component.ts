import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(private router: Router, private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  close() {
    try {
      this.navCtrl.back();
    } catch (e) {
      return this.router.navigateByUrl('/account/wallet');
    }
  }
  redirectToAdd() {
    this.router.navigateByUrl('/account/wallet/us-bank-card/add');
  }
  redirectToSend() {
    this.router.navigateByUrl('/account/send-payment');
  }
  redirectToConvert() {
    // this.router.navigateByUrl('/account/send-payment');
  }

}
