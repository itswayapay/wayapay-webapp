import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SendPaymentPage } from './send-payment.page';
import { HomeSendMoneyComponent } from './home/home.component';
import { SelectRecepientComponent } from './select-recepient/select-recepient.component';
import { AddRecepientComponent } from './add-recepient/add-recepient.component';
import { ReviewComponent } from './review/review.component';
import { SelectPaymentComponent } from './select-payment/select-payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/account/send-payment',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomeSendMoneyComponent
  },
  {
    path: 'select-recepient',
    component: SelectRecepientComponent
  },
  {
    path: 'add-recepient',
    component: AddRecepientComponent
  },
  {
    path: 'review/:slug',
    component: ReviewComponent
  },
  {
    path: 'select-payment',
    component: SelectPaymentComponent
  },
  {
    path: 'payment-success',
    component: PaymentSuccessComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SendPaymentPage,
    HomeSendMoneyComponent,
    SelectRecepientComponent,
    AddRecepientComponent,
    ReviewComponent,
    SelectPaymentComponent,
    PaymentSuccessComponent
  ]
})
export class SendPaymentPageModule { }
