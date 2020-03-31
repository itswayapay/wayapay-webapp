import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  public title: string;
  public payAmt: string;
  public selectCard: string;

  constructor(private router: Router) {
    this.title = 'Add money to wallet';
  }

  ngOnInit() {
    this.payAmt = '1,004.00';
    this.selectCard = '*** *** *** 5639';
  }

  backRedirect() {
    return this.router.navigateByUrl('/account/wallet');
  }
  continue() {
    return this.router.navigateByUrl('/account/wallet/asdasdasd/auth');
  }

}
