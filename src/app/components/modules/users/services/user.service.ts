import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClint: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.httpClint.get<User[]>(this.url)
  }

  getUserPosts(id: number):Observable<Post[]>{
    return this.httpClint.get<Post[]>(this.url + '/' + id + '/posts')
  }

}
