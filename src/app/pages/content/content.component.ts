import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://scontent.fnat5-1.fna.fbcdn.net/v/t39.30808-6/349867786_1342050683321240_3284031431999641116_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=7dv0KuLOlnEAX_WqGQw&_nc_ht=scontent.fnat5-1.fna&oh=00_AfCLYJJ1i8yO9Oz-TNYrgmYdfZ_EXk_zkaqA8AJiYBeUxw&oe=647A4BA4"
  contentTitle:string = ""
  contentDescription:string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
