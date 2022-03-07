import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-store-front-featured',
  templateUrl: './store-front-featured.component.html',
  styleUrls: ['./store-front-featured.component.scss'],
})
export class StoreFrontFeaturedComponent implements OnInit {
  featuredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.setProducts();
  }

  setProducts() {
    this.featuredProducts = this.productService.getFeaturedProducts();
  }
}
