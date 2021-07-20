import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailBookingPageRoutingModule } from './detail-booking-routing.module';

import { DetailBookingPage } from './detail-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailBookingPageRoutingModule
  ],
  declarations: [DetailBookingPage]
})
export class DetailBookingPageModule {}
