import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Second App';
  caca = 'hubabuba'
  message = 'i am an alien from marsss'
}
