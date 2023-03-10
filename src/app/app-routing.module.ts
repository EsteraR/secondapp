import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: '', redirectTo: '/HOME', pathMatch:'full'},
  {path: "HOME", component: HeaderComponent},
  {path: "CART", component: CartComponent},
  {path: "SHOP", component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
