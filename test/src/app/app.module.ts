import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";

import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DanhSachBenhAnComponent } from './component/danh-sach-benh-an/danh-sach-benh-an.component';
import { SuaBenhAnComponent } from './component/sua-benh-an/sua-benh-an.component';
import { ThemMoiBenhAnComponent } from './component/them-moi-benh-an/them-moi-benh-an.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DanhSachBenhAnComponent,
    SuaBenhAnComponent,
    ThemMoiBenhAnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
