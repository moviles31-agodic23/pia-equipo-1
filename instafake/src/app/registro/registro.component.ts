import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UserService } from 'src/services/user.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class RegistroComponent implements OnInit {

  formReg: FormGroup;

  constructor(
    private userService: UserService
  ) {
  this.formReg = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
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
