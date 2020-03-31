import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  public title: string;
  public notificationClicked: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.title = 'Notifications';
    this.notificationClicked = true;
  }

  backRedirect() {
    return this.router.navigateByUrl('/account/home');
  }
  toggleNotification() {
    this.notificationClicked ? this.notificationClicked = false : this.notificationClicked = true;
  }

}
