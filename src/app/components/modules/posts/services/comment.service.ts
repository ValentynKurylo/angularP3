import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClint: HttpClient) { }

  getComments(id: number):Observable<Comment[]>{
    return this.httpClint.get<Comment[]>(this.url + '/' + id + '/comments')
  }
}
