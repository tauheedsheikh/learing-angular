import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AuthModule } from './components/auth/auth.module';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DataModule } from './components/data/data.module';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', component: HomeComponent },
  { path:'aboutUs', component: AboutUsComponent },
  { path:'products', loadChildren: ()=> import("./components/products/products.module").then(m=>m.ProductsModule)},
  { path:'auth', loadChildren: ()=> import("./components/auth/auth.module").then(m=>m.AuthModule)},
  { path:'data', loadChildren: ()=> import("./components/data/data.module").then(m=>m.DataModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes),HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
