import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface SideItems {
  img: string;
  header: string;
  text: string;
  backgroundShade: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public sliderContent: SideItems[];
  constructor(public router: Router) { }

  ngOnInit() {
    this.sliderContent = [
      {
        img: '../../../assets/images/section-2.jpg',
        header: 'We deliver <br /> connections',
        text: 'Whether you’re sending money home, or investing back home we got you!',
        backgroundShade: 'rgba(17, 186, 182, 0.58)',
      },
      {
        img: '../../../assets/images/section-3.jpg',
        header: 'Welcome to <br /> Wayapay',
        text: 'Send money to your loved ones, safely and in record time.',
        backgroundShade: 'rgba(58, 58, 58, 0.58)',
      },
      {
        img: '../../../assets/images/section-1.jpg',
        header: 'Wayapay is <br />fast and convinient',
        text: 'We deliver your money instantly to mobile wallets and bank accounts',
        backgroundShade: 'rgba(17, 186, 182, 0.58)',
      }
    ];
  }

  navigateToSignup() {
    this.router.navigateByUrl('/auth/signup');
  }
  navigateToLogin() {
    this.router.navigateByUrl('/auth/login');
  }

}
