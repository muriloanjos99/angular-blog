import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-card',
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.css']
})
export class SideCardComponent implements OnInit {
  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
