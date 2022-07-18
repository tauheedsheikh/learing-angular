import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

public user:user;


  constructor(public dataservice:DataService) {
    this.user = dataservice.user;
  

   }

  ngOnInit(): void {
  }

}
