import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { FormControlValidationMsgDirective } from '../@directives/forms/form-control-validation-msg.directive';
import { FormSubmitValidationMsgDirective } from '../@directives/forms/form-submit-validation-msg.directive';

import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyComponent } from './verify/verify.component';
import { LoginComponent } from './login/login.component';
import { PinComponent } from './pin/pin.component';
import { VerifyPinComponent } from './verify-pin/verify-pin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'verification',
    component: VerifyComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'new-pin',
    component: PinComponent
  },
  {
    path: 'verify-pin',
    component: VerifyPinComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomeComponent,
    SignupComponent,
    VerifyComponent,
    LoginComponent,
    PinComponent,
    VerifyPinComponent,
    FormControlValidationMsgDirective,
    FormSubmitValidationMsgDirective,
  ]
})
export class AuthPageModule { }
