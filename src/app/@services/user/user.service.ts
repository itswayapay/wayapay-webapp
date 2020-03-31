import { Injectable } from '@angular/core';
import { Api } from '../api/api.service';
import { Urls } from '../api/urls.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  reqOpts: any;
  constructor(public api: Api, public url: Urls) { 
    this.reqOpts = this.api._getRequestOptions();
  }

  getUser() {
    this.api.get(this.url.getUserUrl(), this.reqOpts);
  }

  updateProfile() {
    this.api.post(this.url.getProfileUpdateUrl(), this.reqOpts);
  }

  inviteFriends() {
    this.api.post(this.url.getInviteFriendsUrl(), this.reqOpts);
  }
}
