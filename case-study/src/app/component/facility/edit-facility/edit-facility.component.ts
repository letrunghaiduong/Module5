import { Component, OnInit } from '@angular/core';
import {FacilityType} from '../../../../model/facility/facility-type';
import {RentType} from '../../../../model/facility/rent-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../customer/service/customer.service';
import {FacilityService} from '../service/facility.service';
import {CustomerType} from '../../../../model/customer/customer-type';

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {
  facilityTypes: FacilityType[] = [];
  rentTypes: RentType[] = [];

  public compareWith(object1: FacilityType, object2: FacilityType): boolean  {
    return object1 && object2 ? object1.id===object2.id : object1===object2;
  }

  formEditFacility: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
              private facilityService: FacilityService,
              private router: Router) {
    this.formEditFacility = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      maxPeople: new FormControl('', Validators.required),
      facilityType: new FormControl('', Validators.required),
      rentType: new FormControl('', Validators.required),
      standardRoom: new FormControl('', Validators.required),
      descriptionOtherConvenience: new FormControl('', Validators.required),
      poolArea: new FormControl('', Validators.required),
      numberOfFloors: new FormControl('', Validators.required),
      facilityFree: new FormControl('', Validators.required),
    });
    this.activatedRoute.paramMap.subscribe(data=>{
      const id = data.get("id");
      if (id!=null){
        this.getFacility(+id);
      }
    })
  }

  ngOnInit(): void {
    this.facilityService.getAllFacility().subscribe(data=>{
      this.facilityTypes = data;
    })
    this.facilityService.getAllRenType().subscribe(data=>{
      this.rentTypes = data;
    })
  }


  getFacility(id: number){
    return this.facilityService.findById(id).subscribe(data=>{
      this.formEditFacility.patchValue(data);
    })
  }

  update(){
    const facility = this.formEditFacility.value;
    this.facilityService.updateFacility(facility.id, facility).subscribe(data=>{
      this.router.navigate(['faciclity/list']);
      alert("Edit success");
    })
  }
}
