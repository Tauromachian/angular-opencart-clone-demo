import { Injectable } from '@angular/core';

import { Product } from './product';
import { CartProduct } from './cart-product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: CartProduct[] = [];
  products: Product[] = [];
  accumulatedPrice: number = 0;

  constructor() {}

  setProduct(newProduct: Product): void {
    if (this.products.includes(newProduct)) {
      const index = this.getIndexOfCartProduct(newProduct);
      this.cartProducts[index].amount++;
    } else {
      this.products.push(newProduct);
      this.cartProducts.push({ product: newProduct, amount: 1 });
    }
    this.recalculatePrice();
  }

  getIndexOfCartProduct(product: Product): number {
    let indexOfProduct;
    this.cartProducts.forEach((cartProduct, index) => {
      if (cartProduct.product === product) {
        indexOfProduct = index;
      }
    });
    return indexOfProduct || -1;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.recalculatePrice();
  }

  getProducts(): CartProduct[] {
    return this.cartProducts;
  }

  recalculatePrice(): void {
    this.accumulatedPrice = 0;
    this.cartProducts.forEach((cartProduct) => {
      let price: number = 0;
      typeof cartProduct.product.price === 'number'
        ? (price = cartProduct.product.price * cartProduct.amount)
        : (price = parseFloat(cartProduct.product.price) * cartProduct.amount);
      this.accumulatedPrice += price;
    });
  }
}
