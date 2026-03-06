import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})
export class ProductComponent  {

  constructor() { }


  imges:string[] = ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg", "img05.jpg", "img06.jpg", "img07.jpg", "img08.jpg",]
  title:string[] = ["Puff Chair" , "Wood Chair" ,"wood Chair" , "Bombi Chair" , "Lazy Boy Chair" ,  "Easy Chair" , "Uphol Chair" , "Trestle Chair" ]

  price:string[] = ["250€" , "200€" , "150€" , "130€" ,"300€" , "230€" , "170€" , "190€"]
  saling:string[] = ["324" , "265" , "489" , "985" , "625" , "215" , "381" , "159"]



}
