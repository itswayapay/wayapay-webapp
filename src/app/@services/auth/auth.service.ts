import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

const endpoint = `${environment.baseUri}account/`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerEndpoint = `${endpoint}user-registration/`;
  private verifyEndpoint = `${endpoint}user-verification/`;
  private pinEndpoint = `${endpoint}user-pin/`;
  private loginEndpoint = `${endpoint}user-login/`;
  private logoutEndpoint = `${endpoint}logout/`;
  public registerUserSource = new BehaviorSubject<any>(null);
  public registerUserObv = this.registerUserSource.asObservable();

  private noTokenHeader: any;
  private tokenHeader: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  getTokenHeader() {
    const getLocToken = localStorage.getItem('auth_token');
    let getLocHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'
      })
    };
    this.noTokenHeader = getLocHeader;
    if (getLocToken) {
      getLocHeader = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
          Authorization: `Bearer ${getLocToken}`
        })
      };
      this.tokenHeader = getLocHeader;
      return getLocHeader;
    }
    return getLocHeader;
  }


  setRegisteredUser(regUser: any) {
    console.log(regUser);
    this.registerUserSource.next(regUser);
  }
  post_register_user(data: string): Observable<any> {

    return this.http.post<any>(this.registerEndpoint, data, this.noTokenHeader)
      .pipe(
        catchError(this.handleError)
      );
  }
  post_verify_user(data: string): Observable<any> {
    return this.http.post<any>(this.verifyEndpoint, data, this.noTokenHeader)
      .pipe(
        catchError(this.handleError)
      );
  }

  post_pin_user(data: string): Observable<any> {

    return this.http.post<any>(this.pinEndpoint, data, this.noTokenHeader)
      .pipe(
        catchError(this.handleError)
      );
  }

  post_login_user(data: string): Observable<any> {

    return this.http.post<any>(this.loginEndpoint, data, this.noTokenHeader)
      .pipe(
        catchError(this.handleError)
      );
  }

  logout() {
    this.clearLocalData();
  }

  // post_login_user(data: string): Observable<any> {
  //   return this.http.post<any>(this.loginEndpoint, data, this.getTokenHeader())
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // get_logged_in_user(): Observable<FetchUserResponse> {

  //   return this.http.get<FetchUserResponse>(this.userEndpoint, this.getTokenHeader())
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // logout(): Observable<any> {

  //   return this.http.post<any>(this.logoutEndpoint, '', this.getTokenHeader())
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  clearLocalData() {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }


  // Get User Start -----------------//
  isUserAuthenticated(): boolean {
    let userState: boolean;
    const getLocToken = localStorage.getItem('auth_token');
    if (getLocToken) {
      userState = true;
      return userState;
    } else {
      userState = false;
      return userState;
    }
    return userState;
  }

  getRegisterUser() {
    const getLocRegUser = localStorage.getItem('auth-reg-user');
    try {
      return JSON.parse(getLocRegUser);
    } catch (e) {
      this.router.navigateByUrl('/auth/signup');
    }
  }

  // Get User Start -----------------//


  private handleError(error: HttpErrorResponse) {
    console.log('ERROR::::::::::::::::::::');
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

