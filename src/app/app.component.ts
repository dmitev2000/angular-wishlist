import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishitem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('To learn TypeScript', true),
    new WishItem('Something else'),
  ];
  title = 'My wishlist';
  newWishText: string = '';
  listFilter: string = '0';

  get visibleItems(): WishItem[] {
    let value = this.listFilter;
    if (value === '0') {
      return this.items;
    } else if (value === '1') {
      return this.items.filter((item) => !item.isComplete);
    } else {
      return this.items.filter((item) => item.isComplete);
    }
  }

  addNewWish() {
    //console.log(this.newWishText);
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  toggleWish(wish: WishItem) {
    wish.isComplete = !wish.isComplete;
    //console.log(wish);
  }
}
