import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailBookingPage } from './detail-booking.page';

const routes: Routes = [
  {
    path: '',
    component: DetailBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailBookingPageRoutingModule {}
