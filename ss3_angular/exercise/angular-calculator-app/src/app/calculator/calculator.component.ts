import { Component, OnInit } from '@angular/core';
import {Calculator} from '../../model/calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  cal : Calculator = {
    firstNumber: 0,
    lastNumber: 0,
    result: 0
  }

  calc(calculation:string) {
    switch (calculation) {
      case "+":
        this.cal.result = +this.cal.firstNumber + +this.cal.lastNumber;
        break;
      case "-":
        this.cal.result = this.cal.firstNumber - this.cal.lastNumber;
        break;
      case "*":
        this.cal.result = this.cal.firstNumber * this.cal.lastNumber;
        break;
      case "/":
        this.cal.result = this.cal.firstNumber / this.cal.lastNumber;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
