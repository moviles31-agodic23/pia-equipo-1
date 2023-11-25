import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { url } from 'inspector';
import { finalize } from 'rxjs';
import { ImagenesService } from 'src/services/imagenes.service';
import {RouterLink} from "@angular/router";
@Component({
  selector: 'perfil-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.scss'],
  imports: [IonicModule, CommonModule, RouterLink],
  standalone: true,
})
export class VisorComponent implements OnInit {
  listaImagenes: string[][] = new Array();
  servicioImagenes: ImagenesService = inject(ImagenesService);
  cantidadPublicaciones: number = 0;
  mostrarImagenes: boolean = false
  readonly imagenesPorFila: number = 3;
  @Output() emisorCantidadPublicaciones: EventEmitter<number> =
    new EventEmitter<number>();
  constructor() {
    this.servicioImagenes.obtenerPublicaciones()
      .then((publicaciones: string[]) => {
        this.cantidadPublicaciones += publicaciones.length
        publicaciones.forEach((url: string) => {
          this.agregarImagen(url)
        })
        this.emisorCantidadPublicaciones.emit(this.cantidadPublicaciones)
      })
  }
  ngOnInit(): void {
  }
  agregarImagen(urlImagen: string): void {
    const cantidadFilas: number = this.listaImagenes.length
    if(cantidadFilas == 0){
      this.listaImagenes = [[urlImagen]]
      return
    }
    const indiceUltimaFila: number = cantidadFilas - 1
    const ultimaFila: string[] = this.listaImagenes[indiceUltimaFila]
    if (ultimaFila.length == this.imagenesPorFila){
      this.listaImagenes.push([urlImagen])
      return
    } else {
      this.listaImagenes[indiceUltimaFila].push(urlImagen)
    }
    this.mostrarImagenes = true
  }
}
