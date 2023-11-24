import { Component, inject } from '@angular/core';
import { FotosService, UserPhoto } from 'src/services/fotos.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  servicioCamara: FotosService = inject(FotosService)
  constructor() {}
  tomarFoto(): void {
    this.servicioCamara.tomarFoto().then((foto: UserPhoto) => {
      fetch(foto.webviewPath).then(r => {

      })
    })
  }
}
