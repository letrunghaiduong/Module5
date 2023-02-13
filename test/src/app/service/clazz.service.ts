import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Clazz} from "../model/clazz";

@Injectable({
  providedIn: 'root'
})
export class ClazzService {

  constructor(private httpClient: HttpClient) { }

  CLAZZ_URL ="http://localhost:3000/clazz"

  getAll(){
    return this.httpClient.get<Clazz[]>(this.CLAZZ_URL);
  }
}
