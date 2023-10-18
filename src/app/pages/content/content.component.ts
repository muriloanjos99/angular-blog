import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = 'https://tntsports.com.br/__export/1638052653330/sites/esporteinterativo/img/2021/11/27/palmeiras_campeao.png';
  contentTitle: string = 'Minha notícia';
  contentDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eligendi iusto blanditiis molestias quae corporis magnam quo quis! Modi, neque. Cupiditate numquam veritatis tempore vel! Velit accusamus obcaecati maxime et!';

  constructor() { }

  ngOnInit(): void {
  }

}
