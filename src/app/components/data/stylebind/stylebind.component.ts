import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebind',
  templateUrl: './stylebind.component.html',
  styleUrls: ['./stylebind.component.css']
})
export class StylebindComponent implements OnInit {
 // data properties
 public title: string = "Style binding."
 public username: string = "Will Karma";
 public age: number;
 public email: string;
 public isMarried: boolean = true;
 public companies: string[] = ["Facebook", "Amazon", "Netflix", "Google"];

 public colors = {
   R: 'red',
   G: 'green',
   B: 'blue',
 }

 public sizes = {
   TWO: '2',
   TEN: '10',
   TWENTY: '20',
   THIRTY: '30',
 }

 public user = {
   id: 1000,
   name: "john smith",
   email: "john.smith@gmail.com",
   status: true
 }

 constructor() {
   this.age = 20;
   this.email = "john@gmail.com";
 }

 ngOnInit(): void {
 }

 public changeStyle() {
   this.isMarried = !this.isMarried;
 }
}
