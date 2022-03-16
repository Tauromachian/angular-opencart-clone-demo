import { Injectable } from '@angular/core';

import { Product } from './product';
import { FEATURED_PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  selectedProduct: Product = {
    id: '',
    name: '',
    description: '',
    price: '',
  };

  constructor() {}

  getFeaturedProducts(): Product[] {
    return FEATURED_PRODUCTS;
  }

  setSelectedProduct(newProduct: Product): void {
    this.selectedProduct = newProduct;
  }
}
