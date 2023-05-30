import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photoCover:string = "https://scontent.fnat5-1.fna.fbcdn.net/v/t39.30808-6/349867786_1342050683321240_3284031431999641116_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=7dv0KuLOlnEAX_WqGQw&_nc_ht=scontent.fnat5-1.fna&oh=00_AfCLYJJ1i8yO9Oz-TNYrgmYdfZ_EXk_zkaqA8AJiYBeUxw&oe=647A4BA4"
  contentTittle:string = ""
  contentDescription:string = ""
  
  constructor() { }

  ngOnInit(): void {
  }

}
