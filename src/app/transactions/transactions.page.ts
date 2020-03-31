import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface DummyData {
  name: string;
  img: string;
  slug: string;
  date: string;
  amount: string;
}
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  public title: string;
  public dummyData: DummyData[];

  constructor(private router: Router) {
    this.title = 'Transactions';
  }

  ngOnInit() {
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
  backRedirect() {
    return this.router.navigateByUrl('/account/home');
  }
  removeRevere(item) {
    console.log(item);
    this.dummyData = this.dummyData.filter(data => {
      return data.slug !== item.slug;
    });
  }
  public sendMoney(i) {
    return this.router.navigateByUrl('/account/send-payment');
  }

}
