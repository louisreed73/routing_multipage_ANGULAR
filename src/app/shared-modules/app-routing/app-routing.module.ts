import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { Layout1Component } from '../../layouts/layout1/layout1.component';
import { Layout2Component } from '../../layouts/layout2/layout2.component';
import { LayoutNivel21Component } from '../../layouts/layout-nivel21/layout-nivel21.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeComponent } from '../../pages/home/home.component';
import { GuitarsComponent } from '../../pages/guitars/guitars.component';
import { BassComponent } from '../../pages/bass/bass.component';
import { Guitar1Component } from '../../components/guitar1/guitar1.component';




const appRoutes:Routes=[
  {path:"", redirectTo: "/home", pathMatch:"full" },
  {path:"",component:Layout1Component,

  children:[
    {path:"home", component:HomeComponent}
  ]

},
  {path:"",component:Layout2Component,

  children:[
    {path:"guitars", component:GuitarsComponent},
    {path:"bass", component:BassComponent}
  ]

},
  {
    path: "", component: LayoutNivel21Component,

  children:[
    {path:"guitars/guitarSpecific", component:Guitar1Component, pathMatch:"full"}
  ]

},

]


@NgModule({
  declarations: [
    Layout1Component,
    Layout2Component,
    LayoutNivel21Component,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GuitarsComponent,
    BassComponent,
    Guitar1Component,


  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes) 
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
