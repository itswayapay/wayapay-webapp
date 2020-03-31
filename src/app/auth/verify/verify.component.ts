import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { SubSink } from 'subsink';
import { AuthService } from 'src/app/@services/auth/auth.service';
import { LoadingData } from 'src/app/@models/utils.interface';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
  providers: [AuthService]
})
export class VerifyComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  public clickedSubmit: boolean;
  public loadingData: LoadingData;
  public verificationStatus: boolean;
  @ViewChild('input1', { static: false }) input1: ElementRef;
  @ViewChild('input2', { static: false }) input2: ElementRef;
  @ViewChild('input3', { static: false }) input3: ElementRef;
  @ViewChild('input4', { static: false }) input4: ElementRef;
  @ViewChild('input5', { static: false }) input5: ElementRef;
  @ViewChild('input6', { static: false }) input6: ElementRef;
  public code: string;
  private locRegisterUser: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.locRegisterUser = this.authService.getRegisterUser();
    // this.authService.registerUserObv.subscribe(data => {
    //   console.log('REGUSER:://-----------------------');
    //   console.log(data);
    // });
  }

  backRedirect() {
    return this.router.navigateByUrl('/auth/signup');
  }
  addPayment() {
    return this.router.navigateByUrl('/payment/add');
  }

  updateList(currentBox, nextBox) {
    const currentLength = currentBox.value.length;
    const maxLength = Number(currentBox.getAttribute('maxLength'));
    if (currentLength === maxLength) {
      nextBox.focus();
    }
  }
  updateLast(currentBox) {
    const currentLength = currentBox.value.length;
    const maxLength = Number(currentBox.getAttribute('maxLength'));
    const value1 = this.input1.nativeElement.value;
    const value2 = this.input2.nativeElement.value;
    const value3 = this.input3.nativeElement.value;
    const value4 = this.input4.nativeElement.value;
    const value5 = this.input5.nativeElement.value;
    if (value1 !== '' && value2 !== '' && value3 !== '' && value4 !== '' && value5 !== '') {
      if (currentLength === maxLength) {
        // tslint:disable-next-line:max-line-length
        this.code = `${this.input1.nativeElement.value}${this.input2.nativeElement.value}${this.input3.nativeElement.value}${this.input4.nativeElement.value}${this.input5.nativeElement.value}${this.input6.nativeElement.value}`;
        // return this.continue();
        return this.submitForm();
      } else {
        return this.failReset('Please Enter the verification code');
      }
    } else {
      return this.failReset('Please Enter the verification code');
    }
  }

  submitForm() {
    this.clickedSubmit = true;
    const locID = (this.locRegisterUser.data.national_id).toString();
    const toSendData = {
      national_id: locID,
      verification_code: this.code
    };


    const toSend = JSON.stringify(toSendData);
    this.subs.add(
      this.authService
        .post_verify_user(toSend)
        .subscribe(data => {
          if (data.status === '200') {
            localStorage.setItem('auth-verif-user', JSON.stringify(data));
            this.verifyCode(data);
          } else {
            this.failReset(data.message || 'Registration failed.');
          }
        },
          error => {
            this.failReset('Server Error: Verification failed');
          })
    );
  }

  verifyCode(verificationData) {
    this.loadingData = {
      status: true,
      message: verificationData.message
    };
    this.verificationStatus = true;
    setTimeout(() => {
      this.routeToPin();
    }, 5000);
  }

  resetForm() {
    this.input1.nativeElement.value = '';
    this.input2.nativeElement.value = '';
    this.input3.nativeElement.value = '';
    this.input4.nativeElement.value = '';
    this.input5.nativeElement.value = '';
    this.input6.nativeElement.value = '';
    this.input1.nativeElement.focus();
  }

  failReset(errorMsg: string): void {
    if (errorMsg && errorMsg !== '') {
      this.presentToast(errorMsg);
      this.clickedSubmit = false;
      this.verificationStatus = false;
      this.loadingData = null;
      this.code = null;
      this.resetForm();
    } else {
      errorMsg = 'Verification failed';
      this.presentToast(errorMsg);
    }
  }
  routeToPin() {
    this.router.navigateByUrl('/auth/new-pin');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 5000
    });
    toast.present();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
