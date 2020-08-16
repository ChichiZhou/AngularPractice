import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}
  createPost(post) {
    return this.http.post<{ id: number }>(this.url, JSON.stringify(post)); // 使用 <{ id: number }>
  }
  getPosts() {
    return this.http.get(this.url);
  }

  deletePost(post) {
    return this.http.delete(this.url + '/' + post.id);
  }

  updatePost(post) {
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post));
  }
}
