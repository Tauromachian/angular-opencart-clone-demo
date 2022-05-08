import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-store-front-featured',
  templateUrl: './store-front-featured.component.html',
  styleUrls: ['./store-front-featured.component.scss'],
})
export class StoreFrontFeaturedComponent implements OnInit {
  featuredProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getFeaturedProducts().subscribe({
      next: (response) => this.setProducts(response.data),
      error: this.error,
    });
  }

  setProducts(products: Product[]) {
    this.featuredProducts = products.slice(0, 4);
  }

  error(error: any) {
    console.log(error);
  }
}
