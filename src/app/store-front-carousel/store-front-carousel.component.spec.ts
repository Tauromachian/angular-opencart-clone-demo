import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFrontCarouselComponent } from './store-front-carousel.component';

describe('StoreFrontCarouselComponent', () => {
  let component: StoreFrontCarouselComponent;
  let fixture: ComponentFixture<StoreFrontCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreFrontCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreFrontCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
