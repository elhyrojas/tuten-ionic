import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-booking',
  templateUrl: './detail-booking.page.html',
  styleUrls: ['./detail-booking.page.scss'],
})
export class DetailBookingPage implements OnInit {

  constructor(
    public modalController: ModalController,
    ) { }

  ngOnInit() {
  }

  dismissModal() {
    // console.log("cerrando")
    this.modalController.dismiss(
      {
      // 'dismissed': true,
      // 'data': this.comment,
    });
  }

}
