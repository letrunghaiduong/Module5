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
      confirmPassword: new FormControl("",[Validators.required,Validators.minLength(6)]),
      country: new FormControl("",[Validators.required]),
      age: new FormControl("",[Validators.required,Validators.min(18)]),
      gender: new FormControl("",[Validators.required]),
      phone: new FormControl("",[Validators.required])
    },{
      validators: this.checkPassword(`password`, `confirmPassword`)
    });
  }

  checkPassword(controlPass: string, matchingControlConfirm: string): any {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlPass];
      const matching = formGroup.controls[matchingControlConfirm];
      if (matching.errors && !matching.errors.checkPassword) {
        return;
      }
      if (control.value != matching.value) {
        return matching.setErrors({checkPassword: true});
      } else {
        return matching.setErrors(null);
      }
    };
  }

  ngOnInit(): void {
  }

}
