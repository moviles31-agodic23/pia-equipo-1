import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'perfil-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss'],
  imports: [IonicModule],
  standalone: true,
})
export class DescripcionComponent implements OnInit {
  servicioUsuarios: UsuarioService = inject(UsuarioService)
  constructor() {}

  ngOnInit() {}
}
