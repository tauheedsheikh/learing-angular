import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:any;

 
  constructor(public productsService:ProductService){}
  
  ngOnInit(): void {
    this.getAllProducts()
  
}
getAllProducts(){
  this.productsService.getProducts().subscribe((data:any)=>{
    this.products=data;
    console.log(data);
   
  },(error:any)=>{
    console.log(error);
  });


  }
}

