import { Injectable } from '@angular/core';
import { iItem } from './item';
import { SHOPPINGITEMS } from './shopping-itmes';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private cartmessageService: CartService) { }
  getItems(): iItem[] {
    return SHOPPINGITEMS;
  }

}
