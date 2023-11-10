import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagenesService {
  private imagenes: Subject<string[]> = new Subject<string[]>();
  readonly imagenesPorFila: number = 3;
  constructor() {}
  obtenerSuscripcion(): Subject<string[]> {
    return this.imagenes;
  }
  obtenerImagenesPrueba(): Observable<string[]> {
    return new Observable<string[]>((suscriptor) => {
      const cantidadImagenes: number = 4;
      const folder: string = '../../../assets/visor/imagenes_prueba';
      var valoresFila: string[] = [];
      for (let i = 0; i < cantidadImagenes; i++) {
        valoresFila.push(`${folder}/${i + 1}.jpg`);
        if (i % this.imagenesPorFila === 0 && i != 0) {
          suscriptor.next(valoresFila);
          valoresFila = [];
        }
      }
      suscriptor.unsubscribe();
    });
  }
  cantidadImagenes(imagenes: string[][]): number {
    const cantidadFilas = imagenes.length;
    let filasCompletas: number = 0;
    let imageneSobrantes: number = 0;
    switch (cantidadFilas) {
      case 0:
        filasCompletas = 0;
        imageneSobrantes = 0;
        break;
      case 1:
        filasCompletas = 0;
        imageneSobrantes = imagenes[0].length;
        break;
      default:
        filasCompletas = cantidadFilas - 1;
        imageneSobrantes = imagenes[cantidadFilas - 1].length;
        console.log(
          `Filas completas: ${filasCompletas}, Imagenes sobrantes: ${imageneSobrantes}`
        );
        break;
    }
    const cantidadFotos = 3 * filasCompletas + imageneSobrantes;
    return cantidadFotos;
  }
}
