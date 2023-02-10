import { Component, OnInit } from '@angular/core';
import {IWord} from '../i-word';
import {ActivatedRoute} from '@angular/router';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: IWord ={} ;

  constructor(private activatedRoute: ActivatedRoute,
              private dictionaryService: DictionaryService) {
    this.activatedRoute.paramMap.subscribe(data=>{
      const word = data.get("word");
        this.dictionary = this.dictionaryService.findByWord(word);

    })
  }

  ngOnInit(): void {
  }

}
