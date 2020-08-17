import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  create(resource) {
    return this.http
      .post<{ id: number }>(this.url, JSON.stringify(resource))
      .pipe(map((response) => response))
      .pipe(
        catchError((error: Response) => {
          if (error.status === 400)
            return Observable.throw(new BadInput(error.json()));
          else return Observable.throw(new AppError(error.json()));
        })
      ); // 使用 <{ id: number }>
  }
  getAll() {
    return this.http.get(this.url).pipe(map((response) => response));
  }

  delete(id) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(map((response) => response))
      .pipe(
        catchError((error: Response) => {
          if (error.status === 404)
            return Observable.throw(new NotFoundError());
          return Observable.throw(new AppError(error));
        })
      );
  }

  update(resource) {
    return this.http
      .put(this.url + '/' + resource.id, JSON.stringify(resource))
      .pipe(map((response) => response));
  }
}
