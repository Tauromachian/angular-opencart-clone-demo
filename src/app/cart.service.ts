import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: Product[] = [];
  accumulatedPrice: number = 0;

  constructor() {}

  setProduct(newProduct: Product): void {
    this.cartProducts.push(newProduct);
    this.recalculatePrice();
  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.recalculatePrice();
  }

  getProducts(): Product[] {
    return this.cartProducts;
  }

  recalculatePrice(): void {
    this.accumulatedPrice = 0;
    this.cartProducts.forEach((cartProduct) => {
      let price: number = 0;
      typeof cartProduct.price === 'number'
        ? (price = cartProduct.price)
        : (price = parseFloat(cartProduct.price));
      this.accumulatedPrice += price;
    });
  }
}
