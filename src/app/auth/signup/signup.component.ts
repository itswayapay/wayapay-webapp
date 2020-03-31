import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { Router } from '@angular/router';
import { LoadingData } from 'src/app/@models/utils.interface';
// import { PasswordValidationService } from 'src/app/@services/forms/password-validation.service';
import { AuthService } from 'src/app/@services/auth/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit, OnDestroy {

  private subs = new SubSink();
  public registerFormGroup: FormGroup;
  public clickedSubmit: boolean;
  public registrationStatus: boolean;
  public loadingData: LoadingData;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public authService: AuthService,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.registerFormGroup = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(12)])],
      national_id: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(9)])],
      // password: ['testpass', Validators.compose([Validators.required, Validators.minLength(6)])],
      // password_confirmation: ['testpass', Validators.compose([Validators.required, Validators.minLength(6)])],
      terms: [false, Validators.required],
    }
      // , {
      //   validator: PasswordValidationService.MatchPassword
      // }
    );
  }

  submitForm() {
    this.clickedSubmit = true;
    const formData = this.registerFormGroup.value;
    // const toSend = JSON.stringify(formData);

    // setInterval(() => {
    //   // tslint:disable-next-line:max-line-length
    //   const data = `{"status": "200", "message": "Your Verification Code has been sent.", "data": {"first_name": "Geoffrey", "last_name": "Mahugu", "phone_number": 708808521, "national_id": 29550760, "password": "testpass", "password_confirmation": "testpass", "terms": true, "verification_code": "999828"}, "token": {"refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTU4NDQ4NTQwOCwianRpIjoiZmVhNWNkY2MxNDY0NDViZGE2ZjMyNGE3NDkwMDkzMTciLCJ1c2VyX2lkIjozMH0.itscvBX2-dktA7BydGXeeApBnTSCgpf_lop26Q4yvZw", "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTg0Mzk5MzA4LCJqdGkiOiJmZGZmYjg4MjA2Y2U0YjNjOTk3NmJlYmJmZjc5ZWQ4MiIsInVzZXJfaWQiOjMwfQ.MNdrYOvYV9YhPTiP5_S8D1vw9J5hTI_EoMvxIrkAOPk"}}`;
    //   this.authService.setRegisteredUser(data);
    //   this.verifyUser(JSON.parse(data));
    // }, 3000);

    this.subs.add(
      this.authService
        .post_register_user(formData)
        .subscribe(data => {
          if (data.status === '200') {
            localStorage.setItem('auth-reg-user', JSON.stringify(data));
            this.verifyUser(data);
          } else {
            this.failReset(data.message);
          }
        },
          error => {
            this.failReset('Server Error: Failed registration');
          })
    );
  }
  verifyUser(registerUser) {
    this.loadingData = {
      status: true,
      message: registerUser.message
    };
    localStorage.setItem('auth_token', registerUser.token.access);
    this.registrationStatus = true;
    setTimeout(() => {
      this.routeToVerify();
    }, 5000);
  }

  routeToVerify() {
    this.router.navigateByUrl('/auth/verification');
  }
  resetForm() {
    // this.registerFormGroup.reset();
    this.loadingData = null;
  }
  failReset(errorMsg: string): void {
    if (errorMsg && errorMsg !== '') {
      this.presentToast(errorMsg);
      this.clickedSubmit = false;
      this.registrationStatus = false;
      this.loadingData = null;
      this.resetForm();
    } else {
      errorMsg = 'Registration failed';
      this.presentToast(errorMsg);
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 5000
    });
    toast.present();
  }

  backRedirect() {
    return this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
