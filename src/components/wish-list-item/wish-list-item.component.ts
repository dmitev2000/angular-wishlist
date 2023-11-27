import { WishService } from './../../shared/services/wish.service';
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
  constructor(private events: EventService, private wishService: WishService) {}

  @Input() wish!: WishItem;

  get cssClasses() {
    //return this.fullfilled ? ['fullfilled', 'text-muted'] : [];
    return { 'fullfilled text-muted': this.wish.iscomplete };
  }

  removeWish() {
    this.wishService.deleteWish(this.wish.wishid).subscribe((response: any) => {
      console.log(response);
      this.events.emit('removeWish', this.wish);
    });
  }

  toggleFullfilled() {
    this.wishService
      .updateIsComplete(this.wish.wishid)
      .subscribe((response: any) => {
        console.log(response);
        this.wish.iscomplete = !this.wish.iscomplete;
      });
  }
}
