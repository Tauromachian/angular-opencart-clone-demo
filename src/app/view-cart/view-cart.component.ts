import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { CartProduct } from '../cart-product';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss'],
})
export class ViewCartComponent implements OnInit {
  cartProducts: CartProduct[] = [];
  featuredProducts: Product[] = [];

  constructor(
    public cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getFeaturedProducts();
  }

  getProducts(): void {
    this.cartProducts = this.cartService.getProducts();
  }

  getFeaturedProducts(): void {
    this.productService
      .getFeaturedProducts()
      .subscribe({ next: (products) => (this.featuredProducts = products) });
  }

  removeProductFromCart(index: number): void {
    this.cartService.deleteProduct(index);
  }
}
