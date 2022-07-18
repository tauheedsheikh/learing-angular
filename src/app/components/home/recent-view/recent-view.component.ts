import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { user } from 'src/app/models/user.model';

@Component({
  selector: 'app-recent-view',
  templateUrl: './recent-view.component.html',
  styleUrls: ['./recent-view.component.css']
})
export class RecentViewComponent implements OnInit {
  
  
  public u:user ={
    id: 7000,
    name: 'Lokmat News',
    email: 'LokmatNews@gmail.com', 
    status: true,
    address: 'Mumbai East'
  }

  @Output()
  public userEvent= new EventEmitter<user>();
  constructor() { }

  ngOnInit(): void {
  }

  public sumbmitUser(){
    this.userEvent.emit(this.u)
  }

}
