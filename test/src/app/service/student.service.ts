import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  STUDENT_URL = "http://localhost:3000/student";

  getAll(){
    return this.httpClient.get<Student[]>(this.STUDENT_URL);
  }

  createCtudent(student: Student){
    return this.httpClient.post(this.STUDENT_URL,student);
  }
}
