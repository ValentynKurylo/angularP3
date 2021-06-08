import { Component, OnInit } from '@angular/core';
import {Comment} from "../../models/comment";
import {CommentService} from "../../services/comment.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[]

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => {
      console.log(id);
      this.commentService.getComments(id).subscribe(value => {this.comments = value})
    })
  }

  ngOnInit(): void {
  }

}
