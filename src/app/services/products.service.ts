import { Injectable } from "@angular/core";

import { HttpClient} from '@angular/common/http';


@Injectable({
    providedIn:'root'
})
export class ProductService{
    

    // private APIURL:string = 'https://api.escuelajs.co/api/v1/products';
    private APIURL:string = 'http://localhost:8090/api/products';
    private APIURL2:string = 'http://localhost:8090/api/product';

    constructor(private httpClient:HttpClient) { }

    public getProducts():any{
        return this.httpClient.get(this.APIURL);
   
    }
    
    // get one product
    public getOne(id: number): any {
        //return observable
        return this.httpClient.get(`${this.APIURL}/${id}`);
    }

    //get one product
    public getOneByName(name: string): any {
        //return observable
        return this.httpClient.get(`${this.APIURL2}?name=${name}`);
    }

    //add one product 
    public addProduct(product: any): any {
        //return observable
        return this.httpClient.post(`${this.APIURL2}`, product);
    }

    //update one product
    public updateProduct(product: any): any {
        //return observable
        return this.httpClient.put(`${this.APIURL2}/${product.id}`, product);
    }
    //delete one product
    public deleteProduct(id: number): any {
        //return observable
        return this.httpClient.delete(`${this.APIURL2}/${id}`);
    }
}
   
    