import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { CreatePostComponent } from '../create-post/create-post.component';
import { HomeComponent } from '../home/home.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'createpost',component:CreatePostComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
