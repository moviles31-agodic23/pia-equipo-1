import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DetallePublicacionComponent } from '../detalle-publicacion/detalle-publicacion.component'
import {ImagenesService} from "../../services/imagenes.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  standalone: true,
  imports: [IonicModule, DetallePublicacionComponent, NgForOf, RouterLink],
})
export class FeedComponent implements OnInit {
  constructor(public serImg: ImagenesService) {}

  ngOnInit() {
    console.log(this.getPublications())
  }

  pictureArray: String[] = []
  num: number[] = []

  async getPublications(){
    this.pictureArray = await this.serImg.obtenerPublicaciones()
    let i: number = 0
    for (let _ of this.pictureArray) {
      this.num.push(i)
      i++
    }
  }
}
