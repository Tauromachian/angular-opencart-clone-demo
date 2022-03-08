import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: Product[] = [];

  constructor() {}

  setProduct(newProduct: Product): void {
    this.cartProducts.push(newProduct);
  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
  }

  getProducts(): Product[] {
    return this.cartProducts;
  }
}
