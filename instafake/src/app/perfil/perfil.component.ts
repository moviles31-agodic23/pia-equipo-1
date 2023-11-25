import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { VisorComponent } from './visor/visor.component';
import { CommonModule, } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  standalone: true,
  imports: [IonicModule, DescripcionComponent, VisorComponent, CommonModule],
})
export class PerfilComponent implements OnInit {
  cantidadPublicaciones: string = '';
  publicacionesDisponibles: boolean = false;
  constructor() {}
  ngOnInit() {}
  mostrarCantidadPublicaciones(cantidad: number): void {
    if (cantidad === 0) {
      this.publicacionesDisponibles = false;
      return;
    }
    this.cantidadPublicaciones = cantidad >= 100 ? '+99' : cantidad.toString();
    this.publicacionesDisponibles = true
  }
}
