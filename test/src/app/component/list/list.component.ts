import { Component, OnInit } from '@angular/core';
import {ClazzService} from "../../service/clazz.service";
import {StudentService} from "../../service/student.service";
import {Router} from "@angular/router";
import {Student} from "../../model/student";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  studentList: Student[] = [];

  constructor(private clazzService: ClazzService,
              private studentService: StudentService,
              private router: Router) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(){
    this.studentService.getAll().subscribe(data=>{
      this.studentList = data;
    })
  }
}
