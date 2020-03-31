import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reviewer, Reviewers } from '../reviewers.model';
@Component({
  selector: 'app-select-recepient',
  templateUrl: './select-recepient.component.html',
  styleUrls: ['./select-recepient.component.scss'],
})
export class SelectRecepientComponent implements OnInit {
  public title: string;
  public dummyData: Reviewer[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.title = 'Back';
    this.dummyData = Reviewers;
  }

  backRedirect() {
    this.router.navigateByUrl('/account/send-payment');
  }
  navigateToAdd() {
    this.router.navigateByUrl('/account/send-payment/add-recepient');
  }
  public sendMoney(data) { }
  removeRecepient(item) {
    const newDummy = this.dummyData;
    this.dummyData = newDummy.filter(dummy => {
      return dummy.slug !== item.slug;
    });
  }

  continue(data?: any) {
    if (data) {
      this.router.navigateByUrl(`/account/send-payment/review/${data.slug}`);
    }
  }
}
