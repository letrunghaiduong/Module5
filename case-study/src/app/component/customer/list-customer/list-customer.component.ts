import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../../model/customer/customer';
import {CustomerService} from '../service/customer.service';
import {CustomerType} from '../../../../model/customer/customer-type';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent {

  customers: Customer[] = [];
  customerTypes: CustomerType[] = [];
  temp: Customer = {
    id: 0
  };

  name = '';
  email = '';
  customerType = '';

  p = 1;

  constructor(private customerService: CustomerService) {
    this.customerService.getAllCustomerType().subscribe(customerType =>{
      this.customerTypes = customerType;
    });
  }

  ngOnInit(): void {
    this.getAll(this.name,this.email,this.customerType);
  }

  getAll(name: string,email:string, customerType: string){
    this.customerService.getAll(name,email,customerType).subscribe(customer =>{
      this.customers = customer;
    })
  }


  deleteCustomer() {
    if (this.temp.id != null) {
      this.customerService.deleteCustomer(this.temp.id).subscribe(data => {
        this.getAll(this.name,this.email,this.customerType)
        alert("Delete success")
      }, error => {

      },()=>{

      })
    }
  }

}
