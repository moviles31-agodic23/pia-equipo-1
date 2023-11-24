import { Component, inject } from '@angular/core';
import { FotosService, UserPhoto } from 'src/services/fotos.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  servicioFotos: FotosService = inject(FotosService)
  constructor() {}
  tomarFoto(): void {
   this.servicioFotos.tomarFoto().then((foto: UserPhoto) => {
      console.log(foto)
    })
  }
}
