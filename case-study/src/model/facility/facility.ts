import {FacilityType} from './facility-type';
import {RentType} from './rent-type';

export interface Facility {
  id: number;
  name?: string;
  area?: number;
  cost?: number;
  maxPeople?: number;
  facilityType?: FacilityType;
  rentType?: RentType;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  poolArea?: number;
  numberOfFloors?: number;
  facilityFree?: string;
  flagDelete?: boolean;
  img?:string;
}
