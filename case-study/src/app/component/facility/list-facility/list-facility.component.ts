import { Component, OnInit } from '@angular/core';
import {Facility} from '../../../../model/facility/facility';
import {RentType} from '../../../../model/facility/rent-type';
import {FacilityType} from '../../../../model/facility/facility-type';
import {Customer} from '../../../../model/customer/customer';
import {CustomerService} from '../../customer/service/customer.service';
import {FacilityService} from '../service/facility.service';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilities: Facility[] = [];

  temp: Facility = {
    id: 0
  };

  constructor(private facilityService: FacilityService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(){
    this.facilityService.getAllFacility().subscribe(facility =>{
      this.facilities = facility;
    })
  }

  deleteFacility() {
    if (this.temp.id != null) {
      this.facilityService.deleteFacility(this.temp.id).subscribe(data => {
        this.getAll()
        alert("Delete success")
      }, error => {

      },()=>{

      })
    }
  }
}
