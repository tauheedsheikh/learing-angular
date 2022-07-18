import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { user } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';
import { BannarViewComponent } from './bannar-view/bannar-view.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {


  public user:user={
    id:1001,
  name:'gama hgue',
    email: 'gama123@gmail.com', 
    status: true,
    address: 'newYork Street'
  }
  public userList :user[];;

  public data:any;

  @ViewChild(BannarViewComponent)
  public child:any;

public bannerTitle:string="";

  constructor(private dataService:DataService) {
 this.userList=dataService.userList;

   }
  ngAfterViewInit(): void {
    setTimeout(()=>this.data =  this.bannerTitle =  this.child.banner,0)
  }

  ngOnInit(): void {
  }


  receviewData($event:any){
    this.data=$event;
    console.log(this.data);
  }

}
