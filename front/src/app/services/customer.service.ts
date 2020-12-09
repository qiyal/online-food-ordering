import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer";

@Injectable()
export class CustomerService {
  api = '/customers';

  constructor(
    private http: HttpClient
  ) { }

  getCustomerByLogin(login: string): Observable<Customer> {
    return this.http.get<Customer>(this.api + `/${login}`);
  }

  getCustomerMapData(login: string): Observable<Map<string, string>> {
    return this.http.get<Map<string, string>>(this.api + `/map?login=${login}`);
  }

  updateCustomerInfoFull(login: string, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.api + `/${login}`, customer);
  }

  createNewCustomer(customer: any): Observable<string> {
    return this.http.post<string>(this.api + `/create`, customer);
  }
}
