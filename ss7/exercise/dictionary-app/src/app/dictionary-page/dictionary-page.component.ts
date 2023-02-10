import { Component, OnInit } from '@angular/core';
import {IWord} from '../i-word';
import {DictionaryService} from '../service/dictionary.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  dictionaries: IWord[]=[];

  constructor(private dictionaryService:DictionaryService, private router: Router) {
    this.dictionaries = this.dictionaryService.getAll();
  }

  ngOnInit(): void {
  }

}
