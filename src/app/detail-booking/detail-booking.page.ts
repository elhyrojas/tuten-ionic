import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-booking',
  templateUrl: './detail-booking.page.html',
  styleUrls: ['./detail-booking.page.scss'],
})
export class DetailBookingPage {
  @Input() booking: any;

  constructor(
    public modalController: ModalController,
    ) { }

  dismissModal() {
    this.modalController.dismiss();
  }

}
