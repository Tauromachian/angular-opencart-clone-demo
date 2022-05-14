import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getFeaturedProducts(): Observable<any> {
    return this.http.get('api/products');
  }

  getProductsBySearch(searchText: string): Observable<any> {
    const url = `api/products?search=${searchText}`;
    return this.http.get(url);
  }
}
