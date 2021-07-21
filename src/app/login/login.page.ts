import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/models/user';
import { LoginService } from 'src/providers/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {
    user: User;
    form: FormGroup;
    loading: any;

    constructor(
        private router: Router,
        public formBuilder: FormBuilder,
        private loginService: LoginService,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController
    ) {
        this.createForm();
    }

    async presentLoading() {
        this.loading = await this.loadingCtrl.create({
            message: 'Por favor, espere...',
        });
        await this.loading.present();
    }

    createForm() {
        this.form = this.formBuilder.group({
            user: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    login() {
        this.presentLoading();
        this.user = new User();
        this.user.user = this.form.value.user;
        this.user.pass = this.form.value.password;
        this.loginService.login(this.user).subscribe(response => {
            localStorage.setItem('token', response.sessionTokenBck);
            this.loading.dismiss();
            this.router.navigate(['/booking']);
        },
        (error) => {
            console.log(error);
            this.loading.dismiss();
            if (error.status === 400) {
                this.showMessage('Credenciales inválidas.');
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

}
