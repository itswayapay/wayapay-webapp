import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipients',
  templateUrl: './recipients.page.html',
  styleUrls: ['./recipients.page.scss'],
})
export class RecipientsPage implements OnInit {

  public title: string;

  constructor(private router: Router) {
    this.title = 'Recipients';
  }
  ngOnInit() {
  }
  backRedirect() {
    return this.router.navigateByUrl('/account/home');
  }

}
