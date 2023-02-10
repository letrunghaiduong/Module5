import { Injectable } from '@angular/core';
import {IWord} from '../i-word';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaries: IWord[] = [
    {word: "red", mean:"đỏ"},
    {word: "green", mean:"xanh lá"},
    {word: "blue", mean:"xanh dương"},
    {word: "black", mean:"đen"},
    {word: "yellow", mean:"vàng"}
    ];
  constructor() { }

  getAll() {
    return this.dictionaries;
  }

  findByWord(word: any): IWord {
    let temp = this.dictionaries.filter(element => element.word === word)
    return temp[0];
  }
}
