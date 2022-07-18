import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bannar-view',
  templateUrl: './bannar-view.component.html',
  styleUrls: ['./bannar-view.component.css']
})
export class BannarViewComponent implements OnInit {
  

  public banner :string ="This is Banner compnnent data pass for home.";
  constructor() { }

  ngOnInit(): void {
  }

}
