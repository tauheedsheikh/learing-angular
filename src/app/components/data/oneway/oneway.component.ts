import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent implements OnInit {

  // data properties
  public title:string = "Interpolation based data binding."
  public username:string ="John Smith";
  public age: number;
  public email:string;
  public isMarried:boolean = false;
  public companies:string[] = ["Facebook", "Amazon", "Netflix", "Google"] ;

  public user = {
    id: 1000,
    name:"john smith",
    email:"john.smith@gmail.com",
    status: true
  }

  constructor() { 
    this.age = 20;
    this.email = "john@gmail.com";
  }
 
  ngOnInit(): void {
  }

}
