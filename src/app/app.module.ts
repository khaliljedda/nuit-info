import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    CategoryComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
        ClarityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
