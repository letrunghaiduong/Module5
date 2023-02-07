import { Component, OnInit } from '@angular/core';
import {FacilityType} from '../../../../model/facility/facility-type';
import {RentType} from '../../../../model/facility/rent-type';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../customer/service/customer.service';
import {FacilityService} from '../service/facility.service';

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {
  // facilityType: FacilityType[] = [];
  // rentType: RentType[] = [];
  //
  // formEditFacility: FormGroup;
  // constructor(private activatedRoute: ActivatedRoute,
  //             private facilityService: FacilityService,
  //             private router: Router) {
  //   this.formEditFacility = new FormControl()
  // }

  ngOnInit(): void {
  }

}
