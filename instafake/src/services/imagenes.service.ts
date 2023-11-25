import { Injectable, inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { getDownloadURL, getStorage, ref, uploadBytes, listAll, ListResult } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ImagenesService {
  private imagenes: Subject<string[]> = new Subject<string[]>();
  readonly imagenesPorFila: number = 3;
  private fireAuth: AngularFireAuth = inject(AngularFireAuth)
  constructor() {}
  obtenerSuscripcion(): Subject<string[]> {
    return this.imagenes;
  }
  subirImagen(imagen: Blob): void{
    this.fireAuth.currentUser.then(datos => {
      let uidUsuario = datos?.uid
      const almacenamiento = getStorage();
      const localizacionImg = ref(
        almacenamiento, `${uidUsuario}/${uuidv4()}.png`
      );
      const metadata = {
        contentType: 'image/png',
      };
      uploadBytes(localizacionImg, imagen, metadata).then((snapshot) => {
        console.log("Archivo en base")
      })
    })
  }
  async obtenerPublicaciones(): Promise<string[]> {
    let uid: string | undefined = await this.fireAuth.currentUser.then(datos => datos?.uid)
    if (!uid) return [""]
    let bucketActual = getStorage()
    let folderPublicaciones = ref(bucketActual, `${uid}/`)
    let imagenesOriginales: ListResult = await listAll(folderPublicaciones)
    const cantidadImagenes: number = imagenesOriginales.items.length
    let urls: string[] = await Promise.all(
      imagenesOriginales.items.map(
        async (item) => {
          const ubicacionPublicacion = item.fullPath;
          const direccion = await getDownloadURL(ref(bucketActual, ubicacionPublicacion));
          return direccion;
        }
      )
    )
    return urls
  }
  obtenerImagenesPrueba(): Observable<string[]> {
    return new Observable<string[]>((suscriptor) => {
      const cantidadImagenes: number = 4;
      const folder: string = '../../../assets/visor/imagenes_prueba';
      var valoresFila: string[] = [];
      for (let i = 0; i < cantidadImagenes; i++) {
        valoresFila.push(`${folder}/${i + 1}.jpg`);
        if ((i + 1) % this.imagenesPorFila === 0) {
          suscriptor.next(valoresFila);
          valoresFila = [];
        }
      }
      suscriptor.next(valoresFila);
      suscriptor.complete();
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
