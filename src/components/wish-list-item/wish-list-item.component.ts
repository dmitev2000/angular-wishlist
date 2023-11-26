import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../shared/services/EventService';
import { WishItem } from '../../shared/models/wishitem';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  constructor(private events: EventService) {}

  @Input() wish!: WishItem;

  get cssClasses() {
    //return this.fullfilled ? ['fullfilled', 'text-muted'] : [];
    return { 'fullfilled text-muted': this.wish.isComplete };
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
