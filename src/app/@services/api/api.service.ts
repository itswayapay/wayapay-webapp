import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class Api {
    token: string;
    constructor(public http: HttpClient) {
        this.token = JSON.parse(sessionStorage.getItem('token'));
    }

    public _addStandardHeaders(header: HttpHeaders) {
        header = header.set('Content-Type', 'application/json');
        header = header.set('Accept', 'application/json');
        header = header.set('Access-Control-Allow-Origin', '*');
        header = header.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        header = header.set('Authorization', 'Bearer' + this.token);

        return header;
    }

    public _initializeReqOpts(reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                headers: new HttpHeaders(),
                params: new HttpParams()
            };
        }

        return reqOpts;
    }

    public _getRequestOptions() {
        let reqOpts;
        reqOpts = this._initializeReqOpts(reqOpts);
        reqOpts = this._addStandardHeaders(reqOpts.headers);
        return reqOpts;
    }

    get(endpoint: string, params?: any, reqOpts?: any) {
        return this.http.get(endpoint, reqOpts);
    }

    post(endpoint: string, body: any, reqOpts?: any) {
        return this.http.post(endpoint, body, reqOpts);
    }
    put(endpoint: string, body: any, reqOpts?: any) {
        return this.http.put(endpoint, body, reqOpts);
    }

    delete(endpoint: string, reqOpts?: any) {
        return this.http.delete(endpoint, reqOpts);
    }

    patch(endpoint: string, body: any, reqOpts?: any) {
        return this.http.put(endpoint, body, reqOpts);
    }


}