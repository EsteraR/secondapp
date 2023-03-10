import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { iItem } from './item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private name: string = "I am an instance";
  private addedToCart: iItem[] = [];
  private addedToCartSubject: BehaviorSubject<iItem[]>;
  public addedToCartObs: Observable<iItem[]>;
  constructor() {
    this.addedToCartSubject = new BehaviorSubject<iItem[]>([]);
    this.addedToCartObs = this.addedToCartSubject.asObservable();
  }


  addToAccepted(items: iItem) {
    this.name = "I changed my name";
    this.addedToCart.push(items);
    this.addedToCartSubject.next(this.addedToCart);
  }

  removeFromArray(items: iItem) {
    this.addedToCart.splice(this.addedToCart.indexOf(items),1);
    // this.addedToCartSubject.next(this.addedToCart);
  }
}
