import { Component, OnInit } from '@angular/core';
import {ClazzService} from "../../service/clazz.service";
import {StudentService} from "../../service/student.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Clazz} from "../../model/clazz";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formCreate: FormGroup;

  classList: Clazz[] = [];

  constructor(private clazzService: ClazzService,
              private studentService: StudentService,
              private router: Router) {
    this.formCreate = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      dateOfBirth: new FormControl(),
      className: new FormControl()
    })
  }

  ngOnInit(): void {
    this.clazzService.getAll().subscribe(data=>{
      this.classList = data;
    })
  }

  submit(){
    const student = this.formCreate.value;
    this.studentService.createCtudent(student).subscribe(data=>{
      alert("Thêm mới thành công");
      this.router.navigateByUrl("");
    })
  }



}
