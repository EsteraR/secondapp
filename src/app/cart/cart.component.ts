import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { share } from 'rxjs';
import { iItem } from '../item';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  addedItem: iItem[] = [];
  emptyMessage = "";
  constructor(private cartService: CartService) {
  }
  ngOnInit(): void {

    this.cartService.addedToCartObs.subscribe(
      (items) => {
        this.addedItem = items;
        console.log("In subscribe");
        console.log(items);
      }
    )
    console.log("in on init");

  }
  removeFromCart(items: iItem): void {
    this.cartService.removeFromArray(items);
  }
  emptyCart(array: any):string {
    if (this.addedItem.length === 0) {
     return this.emptyMessage = "Your cart is empty";
    } else {
      return this.emptyMessage = "Your cart";
    }
  }
}
