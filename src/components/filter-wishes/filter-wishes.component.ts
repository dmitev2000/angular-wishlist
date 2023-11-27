import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishitem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.iscomplete,
  (item: WishItem) => item.iscomplete,
];

@Component({
  selector: 'app-filter-wishes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-wishes.component.html',
  styleUrl: './filter-wishes.component.css',
})
export class FilterWishesComponent implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  listFilter: string = '0';

  constructor() {}

  ngOnInit(): void {
    this.updateFilter('0');
  }

  updateFilter(value: any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
