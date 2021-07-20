import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DetailBookingPage } from '../detail-booking/detail-booking.page';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  constructor(
    private router: Router,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  signout() {
    this.router.navigate(['/login']);
  }

  async presentModal(e) {
    // console.log(e)
    const modal = await this.modalController.create({
      component: DetailBookingPage,
      cssClass: 'my-custom-class'
      // componentProps: {
      // }
    });

    modal.onDidDismiss().then((data) => {
      // console.log(data)
      // console.log(data.data)
      // if (data.data.data !== undefined) {
      //   if (data.data.data.length > 2) {
      //     this.updateAppointment(data.data.data)
      //   }
      // }
    });

    await modal.present();

  }

}
