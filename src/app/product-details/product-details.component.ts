import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {
    id: 0,
    description: '',
    name: '',
    price: '',
    stock: 0,
    category: '',
  };

  constructor(
    private productService: ProductService,
    public cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const productId = params.get('productId') ?? '';
      this.findProduct(Number(productId));
    });
  }

  findProduct(productId: number) {
    this.productService
      .getFeaturedProducts()
      .subscribe({ next: (products) => this.setProduct(products, productId) });
  }

  setProduct(products: Product[], productId: number) {
    this.product =
      products.find((product) => product.id === productId) ?? this.product;
  }
}
