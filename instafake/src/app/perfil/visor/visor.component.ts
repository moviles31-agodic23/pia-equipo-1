import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { finalize } from 'rxjs';
import { ImagenesService } from 'src/services/imagenes.service';
@Component({
  selector: 'perfil-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true,
})
export class VisorComponent implements OnInit {
  listaImagenes: string[][] = new Array();
  servicioImagenes: ImagenesService = inject(ImagenesService);
  cantidadPublicaciones: number = 0;
  imagenesPorFila: number = 3;
  @Output() emisorCantidadPublicaciones: EventEmitter<number> =
    new EventEmitter<number>();
  constructor() {}
  ngOnInit(): void {
    this.servicioImagenes
      .obtenerImagenesPrueba()
      .pipe(
        finalize(() => {
          this.emisorCantidadPublicaciones.emit(this.cantidadPublicaciones);
          this.agregarImagen(
            '../../../assets/visor/imagenes_prueba/IMG_20200605_075456-1.jpg'
          );
          this.agregarImagen(
            '../../../assets/visor/imagenes_prueba/IMG_20200613_073256.jpg'
          );
          this.agregarImagen(
            '../../../assets/visor/imagenes_prueba/20220513_123432.jpg'
          );
        })
      )
      .subscribe((conjuntoImagenes: string[]) => {
        this.listaImagenes.push(conjuntoImagenes);
        this.cantidadPublicaciones += conjuntoImagenes.length;
      });
  }
  agregarImagen(url: string): void {
    const cantidadFilas: number = this.listaImagenes.length;
    const cantidadImagenesUltimaFila: number =
      this.listaImagenes[cantidadFilas - 1].length;
    if (cantidadImagenesUltimaFila === this.imagenesPorFila) {
      const nuevaFila: string[] = [url];
      this.listaImagenes.push(nuevaFila);
    } else {
      this.listaImagenes[cantidadFilas - 1].push(url);
    }
  }
}
