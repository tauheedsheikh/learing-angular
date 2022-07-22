import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

//define reactive froms for create products
public createFroms:FormGroup;
public isSubmited:boolean=false;
public state:any;



constructor(private fb : FormBuilder,private productsSrv:ProductService, private router:Router) {
  // initialize reactive form with form builder

    this.createFroms = this.fb.group({
      id: [''],
      name :['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      description :['', [Validators.required]],
      productType :['', [Validators.required]],
      manufacturer :['', [Validators.required]],
      seller :['', [Validators.required]],
      price :['', [Validators.required]],

    });
   }

  ngOnInit(): void {
    console.log(history.state.Product);
    if(history.state.products!=null) {
      this.createFroms.patchValue(history.state.product);
    }
  }

  public handleProduct(product:any):void{
    if(product.id !=null && product.id !=""){
      this.updateProduct(product);
    } else{
      this.createProduct(product);
    }
}
  // submit
  public onSubmit(form: any): void {
    if (form.valid) {
      this.isSubmited = true;
      console.log(this.createFroms.value);
      this.handleProduct(this.createFroms.value) ;
    } else {
      this.validateForm(form)
      console.log("Form is not Valid.");
    }
  }
   
   public validateForm(form:any){
    Object.keys(form.controls).forEach(field =>{
      const control = form.controls[field];
      if(control instanceof FormControl) {
        control.markAsTouched({ onlySelf : true });
      } else{
        this.validateForm(form);
      }
    });
  }
  
  public updateProduct(product: any):void {
    // consume add product api
 this.productsSrv.updateProduct(product).subscribe((data: any) => {
   console.log("Product updated successfully.", data);
   this.router.navigateByUrl("/products");
 }, (error: any) => {
   console.log("Product updation failed.", error);
 })
}
  public createProduct(product: any):void {
    // consume add product api
    this.productsSrv.addProduct(product).subscribe((data: any) => {
      console.log("Product created successfully.", data);
      this.router.navigateByUrl("/products");
    }, (error: any) => {
      console.log("Product creation failed.", error);
    })
  }

   hasError(name:string) {
    const field = this.createFroms.get(name);
    return (field?.invalid && field?.touched && field?.errors);
   }
   
   get form () {
    return  this.createFroms.controls;
   }
   
   get id () {
    return  this.form['id'];
   }
   get name () {
    return  this.form['name'];
   }
   get productType () {
    return  this.form['productType'];
   }
  //  get image_url () {
  //   return  this.form['image_url'];
  //  }
   get description () {
    return  this.form['description'];
   }
   get price () {
    return  this.form['price'];
   }
   get seller () {
    return  this.form['seller'];
   }
   get manufacturer () {
    return  this.form['manufacturer'];
   }
   
   }
   

