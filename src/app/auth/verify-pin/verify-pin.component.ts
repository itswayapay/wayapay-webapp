import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { SubSink } from 'subsink';
import { AuthService } from 'src/app/@services/auth/auth.service';
import { LoadingData } from 'src/app/@models/utils.interface';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-verify-pin',
  templateUrl: './verify-pin.component.html',
  styleUrls: ['./verify-pin.component.scss'],
  providers: [AuthService]
})
export class VerifyPinComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  public clickedSubmit: boolean;
  public loadingData: LoadingData;
  public verificationStatus: boolean;
  public title: string;
  state$: Observable<object>;
  @ViewChild('input1', { static: false }) input1: ElementRef;
  @ViewChild('input2', { static: false }) input2: ElementRef;
  @ViewChild('input3', { static: false }) input3: ElementRef;
  @ViewChild('input4', { static: false }) input4: ElementRef;
  private firstPin: number;
  private secondPin: number;
  private locRegisterUser: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    public activatedRoute: ActivatedRoute,
    public toastController: ToastController

  ) { }

  ngOnInit() {
    // this.clickedSubmit = true;
    // this.loadingData = {
    //   status: true,
    //   message: 'Saving your pin'
    // };
    // this.verificationStatus = true;
    this.locRegisterUser = this.authService.getRegisterUser();
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state));
    this.subs.add(
      this.state$.subscribe(data => {
        if (data && data['firstPin']) {
          this.firstPin = data['firstPin'];
        } else {
          this.getLocFirstPin();
        }
      })
    );
  }
  getLocFirstPin() {
    const getFistPin = localStorage.getItem('pin_1');
    if (getFistPin) {
      this.firstPin = Number(getFistPin);
    } else {
      this.backRedirect();
    }
  }

  backRedirect() {
    return this.router.navigateByUrl('/auth/new-pin');
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
        this.secondPin = Number(`${this.input1.nativeElement.value}${this.input2.nativeElement.value}${this.input3.nativeElement.value}${this.input4.nativeElement.value}`);
        this.verifyLocPin();
      }
    } else {
      this.resetForm();
    }
  }

  verifyLocPin() {
    console.log('PIN 1://---------------------------');
    console.log(this.firstPin);
    console.log('PIN 2://---------------------------');
    console.log(this.secondPin);

    this.clickedSubmit = true;
    if (this.firstPin === this.secondPin) {
      this.submitForm();
    } else {
      this.failReset('Pin does not match.');
    }
  }
  failReset(errorMsg: string) {
    this.presentToast(errorMsg);
    this.clickedSubmit = false;
    this.resetForm();
    this.backRedirect();
  }
  submitForm() {
    const locID = (this.locRegisterUser.data.national_id).toString();
    const toSendData = {
      national_id: locID,
      pin: (this.secondPin).toString()
    };
    this.loadingData = {
      status: true,
      message: 'Saving your pin'
    };

    const toSend = JSON.stringify(toSendData);
    this.subs.add(
      this.authService
        .post_pin_user(toSend)
        .subscribe(data => {
          if (data.status === '200') {
            this.pinSave(data);
          } else {
            this.failReset(data.message || 'Pin verification failed.');
          }
        },
          error => {
            this.failReset('Server Error: Verification failed');
          })
    );
  }
  pinSave(data) {
    this.loadingData = {
      status: true,
      message: data.message
    };
    this.verificationStatus = true;
    setTimeout(() => {
      this.routeToLogin();
    }, 5000);
  }
  routeToLogin() {
    this.router.navigateByUrl('/auth/login');
  }

  resetForm() {
    this.input1.nativeElement.value = '';
    this.input2.nativeElement.value = '';
    this.input3.nativeElement.value = '';
    this.input4.nativeElement.value = '';
    this.input1.nativeElement.focus();
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
