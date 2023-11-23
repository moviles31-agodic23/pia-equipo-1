import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UserService } from 'src/services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, CommonModule],
})
export class LoginComponent implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) {
    this.credentials = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

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

  async logout(){
      this.userService.logout()
  }
}
