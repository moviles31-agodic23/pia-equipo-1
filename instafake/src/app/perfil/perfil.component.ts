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
  imagenes: string[][] = [];
  constructor() {
    this.cantidadPublicaciones = this.mensajePublicaciones();
  }
  ngOnInit() {}
  obtenerCantidadPublicaciones(): number {
    const cantidadFilas = this.imagenes.length;
    if (cantidadFilas === 0) return 0;
    const filasCompletas = 3 * cantidadFilas;
    const espaciosSobrantes = 3 * this.imagenes[-1].length;
    return filasCompletas + espaciosSobrantes;
  }
  mensajePublicaciones(): string {
    const cantidadPublicaciones = this.obtenerCantidadPublicaciones();
    if (cantidadPublicaciones >= 100) return '+99';
    return cantidadPublicaciones.toString();
  }
}
