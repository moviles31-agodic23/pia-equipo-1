import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'perfil-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true,
})
export class VisorComponent implements OnInit {
  listaImagenes: string[][] = [];
  constructor() {
    this.listaImagenes = this.obtenerImagenesPrueba();
  }

  ngOnInit() {}
  obtenerImagenesPrueba(): string[][] {
    var folder: string = '../../../assets/visor/imagenes_prueba';
    var primeraFila: string[] = [
      `${folder}/1.jpg`,
      `${folder}/2.jpg`,
      `${folder}/3.jpg`,
    ];
    var segundaFila: string[] = [`${folder}/4.jpg`];
    var imagenes = [primeraFila, segundaFila];
    return imagenes;
  }
}
