import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../models/post";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[]

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({posts})=>this.posts=posts)
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => {this.posts = value})
  }

}
