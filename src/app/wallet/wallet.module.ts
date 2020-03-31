import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { WalletPage } from './wallet.page';

import { AuthComponent } from './auth/auth.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: WalletPage
  },
  {
    path: ':slug',
    component: DetailComponent
  },
  {
    path: ':slug/add',
    component: AddComponent
  },
  {
    path: ':slug/auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WalletPage, DetailComponent, AddComponent, AuthComponent]
})
export class WalletPageModule { }
