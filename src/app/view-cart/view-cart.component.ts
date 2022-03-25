import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss'],
})
export class ViewCartComponent implements OnInit {
  cartProducts: Product[] = [];
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
    this.featuredProducts = this.productService.getFeaturedProducts();
  }

  removeProductFromCart(index: number): void {
    this.cartService.deleteProduct(index);
  }
}
