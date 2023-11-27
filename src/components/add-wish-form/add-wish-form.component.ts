import { WishService } from './../../shared/services/wish.service';
import { FormsModule } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../shared/models/wishitem';

@Component({
  selector: 'app-add-wish-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css',
})
export class AddWishFormComponent {
  constructor(private wishService: WishService) {}

  @Output() addWish = new EventEmitter<WishItem>();

  newWishText: string = '';

  addNewWish() {
    this.wishService.addWish(this.newWishText).subscribe((id: any) => {
      //console.log(id);
      //console.log(this.newWishText);
      //this.items.push(new WishItem(this.newWishText));
      this.addWish.emit(new WishItem(id, this.newWishText));
      this.newWishText = '';
    });
  }
}
