import { Injectable } from "@angular/core";

import { HttpClient} from '@angular/common/http';


@Injectable({
    providedIn:'root'
})
export class ProductService{
    

    private APIURL:string = 'https://api.escuelajs.co/api/v1/products';
    

    constructor(private httpClient:HttpClient) { }

    public getProducts():any{
        return this.httpClient.get(this.APIURL);
    }
}