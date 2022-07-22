import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login:Login;
  public isSubmitted:boolean= false;

  constructor() { 
    this.login = {email:'',password:'', rememberme:false};
  }


  ngOnInit(): void {
  }

  public onSubmit(form:any):void {
    if(form.valid) {
      console.log(this.login);
      this.isSubmitted = true;
    } else{
      this.validateForm(form);
      console.log("Form is not a valid.");
    }
  }

  public validateForm(form:any){
    Object.keys(form.controls).forEach(field =>{
      const control = form.controls[field];
      control.markAsTouched({ onlySelf : true });
    })
  }

  hasError(field:any) {
    return (field.invalid && field.touched && field.errors);
  }
}


