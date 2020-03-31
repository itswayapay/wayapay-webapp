import { Injectable } from '@angular/core';
import { Api } from '../api/api.service';
import { Urls } from '../api/urls.service';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor(public api: Api, public url: Urls) { }

  // this method authorizes a specific client User to access api functionality
  // Todo::secure this to the core in a way that all the sent data is encrypted
  getToken(data: any) {
    let reqOtps = this._setRequestOptions();
    return this.api.post(this.url.getOauthUrl(), data, reqOtps);
  }

  // this method boots the required headers for the request
  // the state should manage this once ngrx is properly set
  // Todo::Write a Test in this Regard
  private _setRequestOptions() {
    return this.api._getRequestOptions();
  }
}
