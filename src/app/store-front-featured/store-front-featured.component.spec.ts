import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFrontFeaturedComponent } from './store-front-featured.component';

describe('StoreFrontFeaturedComponent', () => {
  let component: StoreFrontFeaturedComponent;
  let fixture: ComponentFixture<StoreFrontFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreFrontFeaturedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreFrontFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
