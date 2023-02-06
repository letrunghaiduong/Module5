import {EducationDegree} from './education-degree';
import {Division} from './division';
import {Position} from './position';

export interface Employee {
  id:number;
  name?:string;
  dateOfBirth?:string;
  idCard?:string;
  salary?:number;
  phoneNumber?:string;
  email?:string;
  address?:string;
  position?:Position;
  division?:Division;
  educationDegree?:EducationDegree,
  flagDelete?:boolean
}
