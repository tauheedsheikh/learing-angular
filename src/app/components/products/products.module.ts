import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { ViewComponent } from './view/view.component';
import { ReviewComponent } from './review/review.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { DataService } from 'src/app/services/data.service';




const routes: Routes = [
  { path:'', component: ProductsComponent },
  { path:'create', component: CreateComponent },
  { path:'list', component: ListComponent },
  { path:'cart', component: CartComponent },
  { path:'view', component: ViewComponent },
  { path:'review', component: ReviewComponent },    
];
@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    ListComponent,
    CartComponent,
    ViewComponent,
    ReviewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
  providers:[DataService]
})
export class ProductsModule { }
