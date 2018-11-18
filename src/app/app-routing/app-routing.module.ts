import { ArticleComponent } from './../all-posts/article/article.component';
import { ListPostsComponent } from './../all-posts/list-posts/list-posts.component';
import { AllPostsComponent } from './../all-posts/all-posts.component';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { CreatePostComponent } from '../create-post/create-post.component';
import { HomeComponent } from '../home/home.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'createpost',component:CreatePostComponent},
  {path:'categories',component:AllPostsComponent,children:[
    {path:':categoryId',component:ListPostsComponent},
    {path:':categoryId/:articleId',component:ArticleComponent},
  ]}
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
