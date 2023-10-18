import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
  @Input()
  Id: string = "";
  @Input()
  photoCover: string = dataFake[+this.Id].photo;
  @Input()
  cardTitle: string = dataFake[+this.Id].title;
  @Input()
  cardDescription: string = dataFake[+this.Id].description;

  constructor() { }

  ngOnInit(): void {
    console.log(this.cardDescription);
    
  }

}