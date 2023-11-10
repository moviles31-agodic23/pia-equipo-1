import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { VisorComponent } from './visor/visor.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  standalone: true,
  imports: [IonicModule, DescripcionComponent, VisorComponent],
})
export class PerfilComponent implements OnInit {
  cantidadPublicaciones: string = '';
  constructor() {
    this.cantidadPublicaciones = this.mensajePublicaciones();
  }

  ngOnInit() {}
  obtenerCantidadPublicaciones(): number {
    return 0;
  }
  mensajePublicaciones(): string {
    return '+XX';
  }
}
