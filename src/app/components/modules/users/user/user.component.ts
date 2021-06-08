import {Component, Input, OnInit} from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {Post} from "../models/post";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User

  posts: Post[]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }



}
