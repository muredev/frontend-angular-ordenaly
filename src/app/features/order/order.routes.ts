import { Route } from "@angular/router";

import { OrderListComponent } from "./views/list-order.component";  
import { NewOrderPageComponent } from "./views/new-order.component";
import { OrderDetailsComponent } from "./views/detail-order.component";  

export default [
  { 
    children: [
      {
        path: '',
        component: OrderListComponent
      },
      {
        path: 'new',
        component: NewOrderPageComponent 
      },
      {
        path: 'edit/:id',
        component: NewOrderPageComponent
      },
      {
        path: ':id',
        component: OrderDetailsComponent
      },
    ]
  },
] as Route[]