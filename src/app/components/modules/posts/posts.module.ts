import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {PostService} from "./services/post.service";
import {UsersModule} from "../users/users.module";
import { CommentsComponent } from './components/comments/comments.component';
import {CommandScope} from "@angular/cli/models/interface";
import {CommentService} from "./services/comment.service";
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
  ],
  providers: [PostService, CommentService]
})
export class PostsModule { }
