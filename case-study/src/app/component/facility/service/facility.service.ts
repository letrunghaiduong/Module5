import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../../../model/customer/customer';
import {CustomerType} from '../../../../model/customer/customer-type';
import {Facility} from '../../../../model/facility/facility';
import {RentType} from '../../../../model/facility/rent-type';
import {FacilityType} from '../../../../model/facility/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  FACILITY ='http://localhost:3000/facility';
  RENT_TYPE='http://localhost:3000/rent-type';
  FACILITY_TYPE='http://localhost:3000/facility-type'

  constructor(private httpClient: HttpClient) {

  }
  getAllFacility(): Observable<Facility[]>{
    return this.httpClient.get<Facility[]>(this.FACILITY);
  }

  deleteFacility(id: number): Observable<Facility> {
    return this.httpClient.delete<Facility>(this.FACILITY + `/` + id);
  }

  saveFacility(facility: Facility): Observable<Facility> {
    return this.httpClient.post<Facility>(this.FACILITY, facility);
  }

  findById(id: any): Observable<Facility> {
    return this.httpClient.get<Facility>(this.FACILITY + `/` + id);
  }

  updateFacility(id: number, facility: Facility): Observable<Facility> {
    return this.httpClient.patch<Facility>(this.FACILITY + `/` + id, facility);
  }

  getAllRenType(): Observable<RentType[]>{
    return this.httpClient.get<RentType[]>(this.RENT_TYPE);
  }

  getAllFacilityType(): Observable<FacilityType[]>{
    return this.httpClient.get<FacilityType[]>(this.FACILITY_TYPE);
  }
}
