import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-store-front',
  templateUrl: './store-front.component.html',
  styleUrls: ['./store-front.component.scss'],
})
export class StoreFrontComponent implements OnInit {
  searchText: string = '';

  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  goToSearchView(): void {
    this.router.navigate(['/search', { searchText: this.searchText }]);
  }
}
