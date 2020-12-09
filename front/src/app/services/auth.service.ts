import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  api = '/api';

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(data) {
    this.http.get(this.api + `/users?email=${data.login}&phoneNumber=${data.login}`);
  }
}
