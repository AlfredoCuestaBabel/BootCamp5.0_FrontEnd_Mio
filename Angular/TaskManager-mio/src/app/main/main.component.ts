import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onKey(value:string){
    
    if (value) {
      alert(value);
    }

  }
}
