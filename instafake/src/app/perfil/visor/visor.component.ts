import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'perfil-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.scss'],
  imports: [IonicModule],
  standalone: true,
})
export class VisorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
