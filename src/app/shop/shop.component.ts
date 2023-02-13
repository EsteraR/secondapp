import { Component } from '@angular/core';
import { iItem } from '../item';
import { SHOPPINGITEMS } from '../shopping-itmes';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent {
  items = SHOPPINGITEMS;
  selectedItem? : iItem;

  onSelect(item: iItem):void{
    this.selectedItem = item;
  }
}
