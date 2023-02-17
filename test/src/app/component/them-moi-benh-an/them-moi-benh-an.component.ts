import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BenhAnService} from "../../service/benh-an.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-them-moi-benh-an',
  templateUrl: './them-moi-benh-an.component.html',
  styleUrls: ['./them-moi-benh-an.component.css']
})
export class ThemMoiBenhAnComponent implements OnInit {
  formThemMoi: FormGroup;

  constructor(private benhAnService: BenhAnService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.formThemMoi = new FormGroup({
      id: new FormControl(),
      maBenhAn: new FormControl(),
      maBenhNhan: new FormControl(),
      tenBenhNhan: new FormControl(),
      ngayNhapVien: new FormControl(),
      ngayRaVien: new FormControl(),
      lyDoNhapVien: new FormControl(),
      phuongPhapDieuTri: new FormControl(),
      bacSiDieuTri: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  themBenhAn() {
    this.benhAnService.themMoi(this.formThemMoi.value).subscribe(next => {
      this.router.navigateByUrl("");
      alert("Thêm mới thành công");
    })
  }
}
