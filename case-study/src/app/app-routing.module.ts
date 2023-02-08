import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ListCustomerComponent} from './component/customer/list-customer/list-customer.component';
import {CreateCustomerComponent} from './component/customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './component/customer/edit-customer/edit-customer.component';
import {ListFacilityComponent} from './component/facility/list-facility/list-facility.component';
import {ListContractComponent} from './component/contract/list-contract/list-contract.component';
import {EditFacilityComponent} from './component/facility/edit-facility/edit-facility.component';

const routes: Routes = [
  {path: "",component:HomeComponent},
  {path: "customer/list",component:ListCustomerComponent},
  {path: "customer/create",component:CreateCustomerComponent},
  {path: "customer/edit/:id",component:EditCustomerComponent},
  {path: "facility/list",component:ListFacilityComponent},
  {path: "contract/list",component:ListContractComponent},
  {path: "facility/edit/:id",component:EditFacilityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
