import { Injectable } from '@angular/core';
import { Api } from '../api/api.service';
import { Urls } from '../api/urls.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {
  reqOpts: any;
  constructor(public api: Api, public url: Urls) {
    this.reqOpts = this._setRequestOptions();
  }
  // constructor() { }

  // this is the method to verify users phone number on registration & login
  // this method is universal and unique to a user on the backen,  throttled to 2 requests per Ip
  verify(data: any) {
    // return this.api.post(this.url.getVerifyUrl(), data, this.reqOpts);
  }

  // this method expects the OTP sent to the user in order to verify the authenticity
  // only valid otp codes will be verified
  // non-valid will timeout and user will be expected to add security Questions
  confirm(data: any) {
    // return this.api.post(this.url.getConfirmation(), data, this.reqOpts);
  }

  // Upon successful verification of the phone number,  the user can now be registered to the platform
  // this methods can all be called asynchronusly 
  register(data: any) {
    // return this.api.post(this.url.getRegistrationUrl(), data, this.reqOpts);
  }

  // method to boot up the headers and parameters required
  private _setRequestOptions(): any {
    // let reqOpts = this.api._getRequestOptions();
    // return reqOpts;
  }
}
