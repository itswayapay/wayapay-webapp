import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { AuthService } from 'src/app/@services/auth/auth.service';
import { LoadingData } from 'src/app/@models/utils.interface';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]

})
export class LoginComponent implements OnInit, OnDestroy {
  public title: string;
  public loginFormGroup: FormGroup;
  private subs = new SubSink();
  public clickedSubmit: boolean;
  public loadingData: LoadingData;
  public loginStatus: boolean;
  private pin: string;
  private nationalID: string;
  private locRegisterUser: any;
  public hasLocPin: boolean;

  @ViewChild('input1', { static: false }) input1: ElementRef;
  @ViewChild('input2', { static: false }) input2: ElementRef;
  @ViewChild('input3', { static: false }) input3: ElementRef;
  @ViewChild('input4', { static: false }) input4: ElementRef;

  constructor(
    private router: Router,
    private authService: AuthService,
    public toastController: ToastController,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.locRegisterUser = this.authService.getRegisterUser();
    if (this.locRegisterUser) {
      this.hasLocPin = true;
    } else {
      this.hasLocPin = false;
      this.loginFormGroup = this.formBuilder.group({
        national_id: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(9)])],
      });
    }
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
    if (value1 !== '' && value2 !== '' && value3 !== '') {
      if (currentLength === maxLength) {
        // tslint:disable-next-line:max-line-length
        this.pin = `${this.input1.nativeElement.value}${this.input2.nativeElement.value}${this.input3.nativeElement.value}${this.input4.nativeElement.value}`;
        this.submitForm();
      }
    } else {
      this.resetForm();
    }
  }
  submitID() {
    this.nationalID = this.loginFormGroup.controls['national_id'].value;
    this.hasLocPin = true;
  }

  submitForm() {
    this.clickedSubmit = true;
    let locID = '';
    if (this.nationalID) {
      locID = (this.nationalID).toString();
    } else {
      locID = (this.locRegisterUser.data.national_id).toString();
    }
    const toSendData = {
      national_id: locID,
      pin: this.pin
    };
    this.loadingData = {
      status: true,
      message: 'Submiting your pin'
    };

    const toSend = JSON.stringify(toSendData);
    this.subs.add(
      this.authService
        .post_login_user(toSend)
        .subscribe(data => {
          if (data.status === '200') {
            this.saveUser(data);
          } else {
            this.failReset(data.message || 'Incorrect Pin');
          }
        },
          error => {
            this.failReset('Server Error: Incorrect Pin');
          })
    );
  }

  saveUser(data) {
    localStorage.setItem('account_user', JSON.stringify(data.data));
    this.loadingData = {
      status: true,
      message: data.message
    };

    this.loginStatus = true;
    setTimeout(() => {
      this.clickedSubmit = false;
      this.loginStatus = false;
      this.routeToAccount();
    }, 1000);
  }
  routeToAccount(): void {
    this.router.navigateByUrl('/account/home');
  }

  failReset(errorMsg: string) {
    this.presentToast(errorMsg);
    this.clickedSubmit = false;
    this.resetForm();
    this.backRedirect();
  }

  resetForm() {
    this.input1.nativeElement.value = '';
    this.input2.nativeElement.value = '';
    this.input3.nativeElement.value = '';
    this.input4.nativeElement.value = '';
    this.input1.nativeElement.focus();
  }

  backRedirect() {
    return this.router.navigateByUrl('/auth');
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
