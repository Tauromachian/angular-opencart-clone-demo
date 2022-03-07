import { Injectable } from '@angular/core';

import { Product } from './product';
import { FEATURED_PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getFeaturedProducts(): Product[] {
    return FEATURED_PRODUCTS;
  }
}
