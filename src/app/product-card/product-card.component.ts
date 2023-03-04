import { Component , Input } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {

@Input() product =
{

  "createdAt":"",
  "name":"",
  "image":"",
  "rate":0,
  "count":0,
  "description":"",
  "price":"",
  "reviews":[

     "",

  ],
  "id":""
}

  constructor(private router : Router){



  }


  Show(){
    this.router.navigate(['product details' , this.product.id])

  }
}