import { Injectable } from '@angular/core';
import { Api } from '../api/api.service';
import { Urls } from '../api/urls.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  reqOpts: any;
  constructor(public api: Api, public url: Urls) {
    this.reqOpts = this.api._getRequestOptions();
  }

  allCards() {
    this.api.get(this.url.getCardsUrl(), this.reqOpts).subscribe(data => {
      console.log(data);
    });
  }

  addCard(data: any) {
    this.api.post(this.url.getAddCardUrl(), data, this.reqOpts);
  }

  deleteCard() {
    //add url to the Url Service
  }
}
