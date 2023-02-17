import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListCustomerComponent} from './component/customer/list-customer/list-customer.component';
import {EditCustomerComponent} from './component/customer/edit-customer/edit-customer.component';
import {CreateCustomerComponent} from './component/customer/create-customer/create-customer.component';
import {CreateContractComponent} from './component/contract/create-contract/create-contract.component';
import {ListContractComponent} from './component/contract/list-contract/list-contract.component';
import {ListFacilityComponent} from './component/facility/list-facility/list-facility.component';
import {EditFacilityComponent} from './component/facility/edit-facility/edit-facility.component';
import {CreateFacilityComponent} from './component/facility/create-facility/create-facility.component';
import {HomeComponent} from './component/home/home.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { InfoFacilityComponent } from './component/facility/info-facility/info-facility.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    CreateContractComponent,
    ListContractComponent,
    ListFacilityComponent,
    EditFacilityComponent,
    CreateFacilityComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InfoFacilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
