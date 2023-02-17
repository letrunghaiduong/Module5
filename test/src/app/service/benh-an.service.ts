import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BenhAn} from "../model/benh-an";

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {
  URL ="http://localhost:3000/benhAn"

  URL_BE ="http://localhost:8080"
  constructor(private httpClient:HttpClient) { }

  danhSach(){
   return  this.httpClient.get<BenhAn[]>(this.URL_BE);
  }

  timBenhAn(id:number){
   return  this.httpClient.get<BenhAn>(this.URL_BE+'/'+id);
  }

  themMoi(benhAn:BenhAn){
    return this.httpClient.post(this.URL_BE,benhAn);
  }

  suaBenhAn(id:number, benhAn:BenhAn){
   return  this.httpClient.patch(this.URL_BE+'/'+id,benhAn);
  }

  xoaBenhAn(id:number){
   return  this.httpClient.delete(this.URL_BE+'/'+id)
  }
}
