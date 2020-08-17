import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http
      .get('/api/orders')
      .pipe(map((response) => response.json()));
  }
}
