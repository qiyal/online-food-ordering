import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {CustomerService} from "./customer.service";

@Injectable()
export class AuthService {

  api = '/login';
  auth = false;
  authUserLogin: string;
  // authUser: Customer = null;

  constructor(
    private http: HttpClient,
    private customerService: CustomerService,
  ) {
    this.init();
  }

  init() {
    let login = localStorage.getItem('userLogin');

    if (login) {
      this.setUserLogin(login);
    }
  }

  setUserLogin(value: string) {
    localStorage.setItem('userLogin', value);
    this.auth = true;
    this.authUserLogin = value;
    this.mappingUserData(value);
  }

  isAuth(): boolean {
    return this.auth;
  }

  login(data): Observable<boolean> {
    return this.http.post<boolean>(this.api, data);
  }

  logout() {
    this.auth = false;
    // this.authUserId = null;
    this.authUserLogin = null;
    localStorage.clear();
  }

  mappingUserData(login: string)  {
    // this.customerService.getCustomerMapData(login).subscribe(res => {
    //   const map: Map<string, string> = res;
    //   // this.authUser.urlAvatar = res.get('urlAvatar');
    //   // this.authUser.lastName = res.get('lastName');
    //   // this.authUser.firstName = res.get('firstName');
    //   // this.authUser.email = res.get('email');
    //   // this.authUser = res;
    //   this.authUser.firstName="dsds";
    //   console.log(res);
    //   console.log(this.authUser);
    // });
  }
}
