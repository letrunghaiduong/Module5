import { Component, OnInit } from '@angular/core';
import {BenhAnService} from "../../service/benh-an.service";
import {BenhAn} from "../../model/benh-an";

@Component({
  selector: 'app-danh-sach-benh-an',
  templateUrl: './danh-sach-benh-an.component.html',
  styleUrls: ['./danh-sach-benh-an.component.css']
})
export class DanhSachBenhAnComponent implements OnInit {
  danhSach:BenhAn[] = []
  temp: BenhAn ={};

  constructor(private benhAnService: BenhAnService) {
    this.danhSachBenhAn()
  }

  ngOnInit(): void {
  }

  danhSachBenhAn(){
    this.benhAnService.danhSach().subscribe(data=>{
      console.log(data)
      this.danhSach = data
    })
  }

  xoaBenhAn(){
    const id = this.temp.id;
    if (id!=null){
      this.benhAnService.xoaBenhAn(id).subscribe(data=>{
        alert("Xóa Thành Công");
        this.danhSachBenhAn()
      })
    }
  }
}
