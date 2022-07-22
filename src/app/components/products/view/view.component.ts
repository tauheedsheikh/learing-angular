import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public product:any;

  constructor(public productsService:ProductService) { }

  ngOnInit(): void {
    // console.log(history.state.product);    
    if(history.state.product!=null) {
      this.product = history.state.product;
    }
  }


}

