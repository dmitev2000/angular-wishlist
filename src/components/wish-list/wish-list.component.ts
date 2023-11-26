import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../shared/models/wishitem';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent {
  title = 'My wishlist';
  @Input() wishes: WishItem[] = [];
}
