import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnewayComponent } from './oneway/oneway.component';
import { PropertyComponent } from './property/property.component';
import { ClassComponent } from './class/class.component';
import { StylebindComponent } from './stylebind/stylebind.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', component: OnewayComponent },
  { path:'property', component: PropertyComponent },
  { path:'style', component: StylebindComponent },
  { path:'class', component: ClassComponent },
  { path:'event', component: EventbindComponent },
  { path:'twoway', component: TwowayComponent },    
];

@NgModule({
  declarations: [
    OnewayComponent,
    PropertyComponent,
    ClassComponent,
    StylebindComponent,
    EventbindComponent,
    TwowayComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
  ],
  exports: [RouterModule]
})
export class DataModule { }
