import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFrontProductsNavComponent } from './store-front-products-nav.component';

describe('StoreFrontProductsNavComponent', () => {
  let component: StoreFrontProductsNavComponent;
  let fixture: ComponentFixture<StoreFrontProductsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreFrontProductsNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreFrontProductsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
