import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { BookingService } from 'src/providers/booking.service';
import { DetailBookingPage } from '../detail-booking/detail-booking.page';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.page.html',
    styleUrls: ['./booking.page.scss'],
})
export class BookingPage {
    bookings: any;
    form: FormGroup;
    textSearch = '';
    fieldSearch = '';
    loading: any;

    constructor(
        private router: Router,
        public modalController: ModalController,
        public bookingService: BookingService,
        private formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController
    ) {
        this.createForm();
        this.presentLoading();
     }

    ionViewDidEnter() {
        this.loadBookings();
    }

    async presentLoading() {
        this.loading = await this.loadingCtrl.create({
            message: 'Por favor, espere...',
        });
        await this.loading.present();
    }

    loadBookings() {
        this.bookingService.getAllBooking().subscribe(response => {
            this.bookings = response;
            this.loading.dismiss();
        },
        (error) => {
            this.loading.dismiss();
            if (error.status === 401) {
                this.router.navigate(['/login']);
                this.showMessage('No está autorizado.');
            }
        });
    }

    async showMessage(message: string) {
        const toast = await this.toastCtrl.create({
            message,
            duration: 3000
        });
        toast.present();
    }

    createForm() {
        this.form = this.formBuilder.group({
            id: ['', []],
            price: ['', []],
            option: ['like', []],
        });
    }

    async presentModal(booking) {
        const modal = await this.modalController.create({
            component: DetailBookingPage,
            cssClass: 'my-custom-class',
            componentProps: {
                booking
            }
        });

        await modal.present();
    }

    signout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }

    search(event, field) {
        this.textSearch = event.detail.value;
        this.fieldSearch = field;
    }

}
