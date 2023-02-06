import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../../../model/customer/customer-type';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerTypes: CustomerType[] = [];
  formCreateCustomer: FormGroup;

  constructor(private customerService: CustomerService,
              private router: Router) {
    this.formCreateCustomer = new FormGroup({
      id: new FormControl("",[Validators.required]),
      name:new FormControl("",[Validators.required]),
      customerCode:new FormControl('',[Validators.required,Validators.pattern('KH-[0-9]{4}')]),
      dateOfBirth: new FormControl("",[Validators.required]),
      idCard: new FormControl("",[Validators.required,Validators.pattern("([0-9]{9})|([0-9]{12})")]),
      phoneNumber:new FormControl("",[Validators.required,Validators.pattern("(((\\+|)84)|0)(3|5|7|8|9)+([0-9]{8})")]),
      gender: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required,Validators.email]),
      address: new FormControl("",[Validators.required]),
      customerType: new FormControl("",Validators.required)
    })
  }

  ngOnInit(): void {
    this.customerService.getAllCustomerType().subscribe(customerType =>{
      this.customerTypes = customerType;
    })
  }


  submit() {
    const customer = this.formCreateCustomer.value;
    this.customerService.saveCustomer(customer).subscribe(data=>{
    });
    alert('Add new success');
    this.router.navigateByUrl('customer/list');
  }
}
