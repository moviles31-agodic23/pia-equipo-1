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
  @Output() emisorCantidadPublicaciones: EventEmitter<number> =
    new EventEmitter<number>();
  constructor() {}
  ngOnInit(): void {
    this.servicioImagenes
      .obtenerImagenesPrueba()
      .pipe(
        finalize(() => {
          this.emisorCantidadPublicaciones.emit(this.cantidadPublicaciones);
        })
      )
      .subscribe((conjuntoImagenes: string[]) => {
        this.listaImagenes.push(conjuntoImagenes);
        this.cantidadPublicaciones += conjuntoImagenes.length;
      });
  }
}
