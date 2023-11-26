import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishitem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from '../components/wish-list/wish-list.component';
import { AddWishFormComponent } from '../components/add-wish-form/add-wish-form.component';
import { FilterWishesComponent } from '../components/filter-wishes/filter-wishes.component';
import { EventService } from '../shared/services/EventService';
import { HttpClientModule } from '@angular/common/http';
import { WishService } from '../shared/services/wish.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    FilterWishesComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [WishService],
})
export class AppComponent implements OnInit {
  items: WishItem[] = [];
  filter: any = (item: WishItem) => item;

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: WishItem) => {
      //console.log(wish);
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  get visibleItems(): WishItem[] {
    return this.items.filter(this.filter);
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data;
    });
  }
}
