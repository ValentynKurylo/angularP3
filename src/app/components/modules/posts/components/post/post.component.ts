import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post

  constructor(private router: Router, private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  showComment():void{
   this.router.navigate([this.post.id], {relativeTo: this.activatedRoute})
  }
}
