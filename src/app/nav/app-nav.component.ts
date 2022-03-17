import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
})
export class StoreFrontNavComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}
}
