import { Component, OnInit } from '@angular/core';
import {Calculator} from '../../model/calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  cal : Calculator = {
    number1: 0,
    number2: 0,
    result: 0
  }

  calc(calculation:string) {
    switch (calculation) {
      case "+":
        this.cal.result = +this.cal.number1 + +this.cal.number2;
        break;
      case "-":
        this.cal.result = this.cal.number1 - this.cal.number2;
        break;
      case "*":
        this.cal.result = this.cal.number1 * this.cal.number2;
        break;
      case "/":
        this.cal.result = this.cal.number1 / this.cal.number2;
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
