import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {path:'',
  component: CategoryComponent},
  {path:'post/:id',
component:PostComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
