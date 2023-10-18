import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = 'https://tntsports.com.br/__export/1638052653330/sites/esporteinterativo/img/2021/11/27/palmeiras_campeao.png';
  contentTitle: string = 'Minha notícia';
  contentDescription: string | string[] = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eligendi iusto blanditiis molestias quae corporis magnam quo quis! Modi, neque. Cupiditate numquam veritatis tempore vel! Velit accusamus obcaecati maxime et!';
  private id: string | null = '0';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
    )

    if (this.id) {
      this.setValuesToComponent(this.id)
    }
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id.toString() === id)[0]

    this.photoCover = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }

}
