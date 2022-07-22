import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: any;


  constructor(public productsService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProduct();

  }
  getAllProduct() {
    this.productsService.getProducts()
      .subscribe((data: any) => {
        this.products = data;
        console.log(data);

      }, (error: any) => {
        console.log(error);
      });
  }
  public onEdit(pdata: any): void {
    this.router.navigateByUrl("/products/create", { state: { product: pdata } })
  }

  public onDelete(productId: number): void {
    this.productsService.deleteProduct(productId).subscribe((data: any) => {
      console.log("Product is deleted successfully!", data);
      this.getAllProduct();
    }, (error: any) => {
      console.log(error);
      this.getAllProduct();
    })

  }

  public getOneProuduct(product: any): void {
    // console.log(product);    
    this.router.navigateByUrl("/products/view", { state: { product: product } });
  }


}
