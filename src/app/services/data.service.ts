import { Injectable } from '@angular/core';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public user: user ={
    id: 1001, 
    name: 'mack',
    email: 'jmack986@gmail.com', 
    status: true,
    address: 'sagar street'

  }

  public userList:user[]=[{

    id:2001,
    name:'jamshid Bhai',
    email:'jamshid@123@gmail.com',
    status:true,
    address:'Jamshid colony'
  },{

    id:2002,
    name:'Raziya Bhai',
    email:'raziya123@gmail.com',
    status:true,
    address:'raziya colony'


  }];
  public isLogged:boolean=false;
  public token:string ='57jdskhfsdjk4375jfsdhfj5fdjs';

  constructor() { }
  
  public getUser():user {
    return this.user;
  }

  public get UserId(): number {
    return this.user.id;
  }

  public isLoggedIn(): boolean {
    return this.isLogged;
  }

  public get UserList(): user[] {
    return this.userList;
}
}