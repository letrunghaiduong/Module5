import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor() {
    this.formLogin = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl("",[this.checkPasswords,Validators.required]),
      country: new FormControl("",[Validators.required]),
      age: new FormControl("",[Validators.required,Validators.min(18)]),
      gender: new FormControl("",[Validators.required]),
      phone: new FormControl("",[Validators.required,Validators.pattern('^(0[3|5|7|8|9])+([0-9]{8})$')])
    });
  }

  checkPasswords(group: AbstractControl){
    let checkPassword = group.value;
    if(checkPassword.password === checkPassword.confirmPassword){
      return null;
    }
    return {'notSame': true};
  }


  ngOnInit(): void {
  }

}
