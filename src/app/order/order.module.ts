
import { OrderItemsComponent } from "./order-items/order-items.component";
import { OrderComponent } from "./order.component";

import { NgModule } from "@angular/core";
import {SharedModule} from '../shared/shared.module'
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { Routes, RouterModule } from "@angular/router";

const ROUTES: Routes =  [
  {path: '', component: OrderComponent}
]

@NgModule({
  declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
  //importa sharedModule sem os providers, que já foram importados no app.module
})

export class OrderModule{}
