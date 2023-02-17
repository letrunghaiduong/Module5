import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../../../model/customer/customer';
import {CustomerType} from '../../../../model/customer/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL = `http://localhost:3000/customer`;

  API_URL_TYPE = `http://localhost:3000/customerType`;
  constructor(private httpClient: HttpClient) { }

  getAll(name: string, email:string, customerType: string): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.API_URL+ '?name_like='+ name + '&email_like=' +email+ '&customerType.name_like='+customerType);
  }


  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.API_URL + `/` + id);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API_URL, customer);
  }

  findById(id: any): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + `/` + id);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.patch<Customer>(this.API_URL + `/` + id, customer);
  }



  getAllCustomerType(): Observable<CustomerType[]>{
    return this.httpClient.get<CustomerType[]>(this.API_URL_TYPE);
  }

}
