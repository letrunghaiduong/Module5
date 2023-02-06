import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../../../model/customer/customer-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerTypes: CustomerType[] = [];

  formUpdateCustomer: FormGroup;

  public compareWith(object1: CustomerType, object2: CustomerType): boolean  {
    return object1 && object2 ? object1.id===object2.id : object1===object2;
  }

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService,
              private router: Router) {
    this.formUpdateCustomer = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      customerCode: new FormControl('', [Validators.required, Validators.pattern('KH-[0-9]{4}')]),
      dateOfBirth: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('([0-9]{9})|([0-9]{12})')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('(((\\+|)84)|0)(3|5|7|8|9)+([0-9]{8})')]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', Validators.required)
    });
    this.activatedRoute.paramMap.subscribe(data=>{
      const id = data.get("id");
      if (id != null){
        this.getCustomer(+id);
      }
    })
  }

  ngOnInit(): void {
    this.customerService.getAllCustomerType().subscribe(customerType => {
      this.customerTypes = customerType;
    });
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.formUpdateCustomer.patchValue(customer);
    });
  };

  submit() {
    const customer = this.formUpdateCustomer.value;
    console.log(customer);
    this.customerService.updateCustomer(customer.id, customer).subscribe(data =>{
      this.router.navigate(['customer/list']);
      alert('Update success');
    }, error => {
    }, () => {
    });
  }

}
