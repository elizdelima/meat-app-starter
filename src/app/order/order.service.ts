import { Injectable } from "@angular/core";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model";
import { Order, OrderItem } from "./order.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { MEAT_API }  from "../app.api";
import 'rxjs/add/operator/map';


//foram incluidos método de fachada que chamam a classe de serviço ShoppingCartService
@Injectable()
export class OrderService{

  constructor(private cartService: ShoppingCartService, private http: HttpClient){}

  itemsValue(): number {
      return this.cartService.total()
  }

  cartItems(): CartItem[]{
    return this.cartService.items
  }

  increaseQty(item:CartItem){
      this.cartService.increaseQty(item)
  }

  decreasyQty(item:CartItem){
    this.cartService.decreasyQty(item)
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item)
  }

  clear(){
    this.cartService.clear()
  }

  checkOrder(order: Order): Observable<string>{
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
           .map(order=> order.id)
  }

  //versao anteriores ao @angular 4.3 - usando Http e não HttpClient

  // checkOrder(order: Order): Observable<string>{
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json')
  //   return this.http.post(`${MEAT_API}/orders`,
  //          JSON.stringify(order),
  //          new RequestOptions({headers: headers}))
  //          .map(response => response.json())
  //          .map(order=> order.id)
  // }
}
