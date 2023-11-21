import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class LoginComponent implements OnInit {
  credentials!: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) {}

  get email(){
    return this.credentials.get('email');
  }

  get password(){
    return this.credentials.get('password');
  }
  ngOnInit(){
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async register(){
    const loading = await this.loadingController.create();
    await loading.present();
    const user = await this.userService.register(this.credentials.value);
    await loading.dismiss();
    if (user){
      this.router.navigateByUrl('/home', {replaceUrl: true});
    } else {
      this.showAlert('Fallo el Registro', 'Intente de nuevo');
    }
  }

  async login(){
    const loading = await this.loadingController.create();
    await loading.present();
    const user = await this.userService.login(this.credentials.value);
    await loading.dismiss();
    if (user){
      this.router.navigateByUrl('/home', {replaceUrl: true});
    } else {
      this.showAlert('Fallo el Login', 'Intente de nuevo');
    }
  }

  async showAlert(header: any, message: any){
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    })
  }
}
