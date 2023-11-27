import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  constructor(private http: HttpClient) {}

  // TODO: Handle Errors

  getWishes() {
    return this.http.get('http://localhost:5202/api/Wish/GetWishes');
  }

  addWish(wishText: string) {
    return this.http.post(
      `http://localhost:5202/api/Wish/AddWish?wishText=${wishText}`,
      {}
    );
  }

  updateIsComplete(wishId: number) {
    return this.http.put(
      `http://localhost:5202/api/Wish/UpdateIsComplete/${wishId}`,
      {}
    );
  }

  deleteWish(wishId: number) {
    return this.http.delete(
      `http://localhost:5202/api/Wish/DeleteWish/${wishId}`
    );
  }
}
