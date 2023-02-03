import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  selected?: string;
  constructor() { }

  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  chooseColor(target: any){
    this.selected = target.value;
  }

}
