import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-store-front',
  templateUrl: './store-front.component.html',
  styleUrls: ['./store-front.component.scss'],
})
export class StoreFrontComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}
}
