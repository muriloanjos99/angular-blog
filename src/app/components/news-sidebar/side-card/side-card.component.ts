import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-side-card',
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.css']
})
export class SideCardComponent implements OnInit {
  @Input()
  Id: string = "";
  photoCover: string = '';
  cardTitle: string = '';

  constructor() { }

  ngOnInit(): void {
    this.photoCover = dataFake[+this.Id].photo;
    this.cardTitle = dataFake[+this.Id].title;
  }

}
