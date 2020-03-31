import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Reviewer, Reviewers } from '../reviewers.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  public title: string;
  public recepient: any;
  constructor(private router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.title = 'review';
    this.route.params.subscribe(data => {
      this.recepient = Reviewers.filter(revData => revData.slug === data.slug)[0];
    });
  }

  backRedirect() {
    this.router.navigateByUrl('/account/send-payment/select-recepient');
  }
  continue() {
    this.router.navigateByUrl('/account/send-payment/select-payment');
  }
}
