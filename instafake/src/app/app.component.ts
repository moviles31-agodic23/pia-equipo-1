import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FotosService, UserPhoto } from 'src/services/fotos.service';
import { ImagenesService } from 'src/services/imagenes.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  servicioCamara: FotosService = inject(FotosService)
  servicioSubirImages: ImagenesService = inject(ImagenesService)
  routerApp: Router = inject(Router)
  barraEnPantalla: boolean = true
  constructor() {
  }
  tomarFoto(): void {
    this.servicioCamara.tomarFoto()
      .then((foto: UserPhoto) => {
        fetch(foto.webviewPath).then(archivo => {
          archivo.blob()
            .then((blob: Blob) => {
              this.servicioSubirImages.subirImagen(blob)
            })
        })
      })
  }
  mostrarBarra(): void {
    this.barraEnPantalla = this.routerApp.url != "/login"
  }
}
