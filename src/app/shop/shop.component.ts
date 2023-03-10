import { Component } from '@angular/core';
import { iItem } from '../item';
import { CollectionService } from '../collection.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent {

  items: iItem[]=[];
  selectedItem? : iItem;
  wantedItem? : iItem;
  constructor(private collectionSercice: CollectionService, private cartService: CartService){}

  getItems():void{
    this.items = this.collectionSercice.getItems();
  }

  ngOnInit():void{
    this.getItems();
  }

  onSelect(items: iItem):void{
    this.selectedItem = items;
  }

  markAsAdded(items: iItem) {
    this.cartService.addToAccepted(items);
  }
}