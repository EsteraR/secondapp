import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: "HOME", component: HeaderComponent},
  {path: "CONTACT", component: ContactComponent },
  {path: "CART", component: CartComponent},
  {path: "SHOP", component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
