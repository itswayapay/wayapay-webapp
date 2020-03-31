import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'send-payment', loadChildren: '../send-payment/send-payment.module#SendPaymentPageModule' },
      { path: 'transactions', loadChildren: '../transactions/transactions.module#TransactionsPageModule' },
      { path: 'settings', loadChildren: '../settings/settings.module#SettingsPageModule' },
      { path: 'recipients', loadChildren: '../recipients/recipients.module#RecipientsPageModule' },
      { path: 'wallet', loadChildren: '../wallet/wallet.module#WalletPageModule' },
      { path: 'notifications', loadChildren: '../notification/notification.module#NotificationPageModule' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccountPage]
})
export class AccountPageModule { }
