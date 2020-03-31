import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../@services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [AuthService]
})
export class HomePage implements OnInit {
  public dummyData: any;
  public userProfile: any;
  constructor(
    private router: Router,
    private menu: MenuController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const getProfileUser = localStorage.getItem('account_user');
    if (getProfileUser) {
      this.userProfile = JSON.parse(getProfileUser);
      console.log(this.userProfile);
    } else {
      this.authService.logout();
    }

    this.dummyData = [
      {
        name: 'John Mwangi Kamau',
        img: '../../assets/dummy/man_1.jpg',
        slug: '1',
        date: 'Today 14:48',
        amount: '$458.33'
      },
      {
        name: 'Anne Achieng',
        img: '../../assets/dummy/lady_2.jpg',
        slug: '2',
        date: 'April 23 2019',
        amount: '$2,300.53'
      },
      {
        name: 'Philip Lamar',
        img: '../../assets/dummy/man_2.png',
        slug: '3',
        date: 'May 04 2019',
        amount: '$1,550.42'
      },
      {
        name: 'Sophia Jonnes',
        img: '../../assets/dummy/lady_1.jpeg',
        slug: '4',
        date: 'December 19 2018',
        amount: '$3,500.90'
      }
    ];
  }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  backRedirect() {
    this.router.navigateByUrl('/');
  }
  sendPayment() {
    this.router.navigateByUrl('/account/send-payment');
  }
  removeReferee(item) {
    this.dummyData = this.dummyData.filter(data => data.slug !== item.slug);
  }
  addBalance() {
    this.router.navigateByUrl('/payment/add');
  }
  routeToCard() {
    this.router.navigateByUrl('/account/wallet/us-bank-card');
  }
  sendMoney(data) {
    console.log(data);
  }
  logOut() {
    this.authService.logout();
  }

}
