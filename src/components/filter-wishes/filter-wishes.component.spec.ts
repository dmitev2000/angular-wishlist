import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterWishesComponent } from './filter-wishes.component';

describe('FilterWishesComponent', () => {
  let component: FilterWishesComponent;
  let fixture: ComponentFixture<FilterWishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterWishesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterWishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
