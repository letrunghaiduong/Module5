import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BenhAnService} from "../../service/benh-an.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sua-benh-an',
  templateUrl: './sua-benh-an.component.html',
  styleUrls: ['./sua-benh-an.component.css']
})
export class SuaBenhAnComponent implements OnInit {
  formSua: FormGroup;

  constructor(private benhAnService: BenhAnService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.formSua = new FormGroup({
      id: new FormControl(),
      maBenhAn: new FormControl(),
      maBenhNhan: new FormControl(),
      tenBenhNhan: new FormControl('', [Validators.required, Validators.pattern('\\D{1,}')]),
      ngayNhapVien: new FormControl('', [Validators.required]),
      ngayRaVien: new FormControl('', [Validators.required]),
      lyDoNhapVien: new FormControl('', [Validators.required]),
      phuongPhapDieuTri: new FormControl('', [Validators.required]),
      bacSiDieuTri: new FormControl('', [Validators.required]),
    });
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.timBenhAn(+id);
      }
    })
  }

  ngOnInit(): void {
  }

  timBenhAn(id: number) {
    this.benhAnService.timBenhAn(id).subscribe(data => {
      this.formSua.patchValue(data)
    })
  }

  suaBenhAn() {
    const benhAn = this.formSua.value;
    if (this.formSua.valid) {
      this.benhAnService.suaBenhAn(benhAn.id, benhAn).subscribe(data => {
        alert("Sửa thành công");
        this.router.navigateByUrl('')
      })
    }
  }
}
