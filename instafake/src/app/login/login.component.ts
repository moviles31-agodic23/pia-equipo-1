import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class LoginComponent implements OnInit {
  formReg: FormGroup;

  constructor(
    private userService: UserService
  ) {
  this.formReg = new FormGroup({
    email: new FormControl(),
    password: new FormControl
  }

  )
  }
  ngOnInit(): void {}

onsubmit() {
  this.userService.register(this.formReg.value)
  .then(response => {
    console.log(response);
  })
  .catch(error => console.log(error));
}
}