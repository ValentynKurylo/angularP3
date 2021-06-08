import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../models/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[]
  UserPosts: Post[]
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      console.log(value.id);
      this.userService.getUserPosts(value.id).subscribe(value1 => {this.posts = value1})
  })
  }

  ngOnInit(): void {


  }

}
