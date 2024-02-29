import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';
import { LoadingRestaurantComponent } from './loading-restaurant/loading-restaurant.component';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { OrderListComponent } from './order-list/order-list.component';
import { LoadingAccountComponent } from './loading-account/loading-account.component';



@NgModule({
  declarations: [RestaurantComponent,LoadingRestaurantComponent,EmptyScreenComponent, LoadingAccountComponent, OrderListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],exports: [RestaurantComponent, LoadingRestaurantComponent, EmptyScreenComponent, LoadingAccountComponent, OrderListComponent]
})
export class ComponentsModule { }
