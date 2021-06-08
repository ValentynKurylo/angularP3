import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

let routers = [
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren:()=>import('./components/modules/users/users.module').then(m=>m.UsersModule)},
  {path: 'posts', loadChildren:()=>import('./components/modules/posts/posts.module').then(m=>m.PostsModule)},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
