import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopViewComponent } from './top-view/top-view.component';
import { BannarViewComponent } from './bannar-view/bannar-view.component';
import { RecentViewComponent } from './recent-view/recent-view.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    TopViewComponent,
    BannarViewComponent,
    RecentViewComponent

  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
