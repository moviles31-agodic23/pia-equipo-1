import {Component, Input, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { ImagenesService } from '../../services/imagenes.service'
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-detalle-publicacion',
  templateUrl: './detalle-publicacion.component.html',
  styleUrls: ['./detalle-publicacion.component.scss'],
  standalone: true,
  imports: [IonicModule, NgIf, RouterLink],
})
export class DetallePublicacionComponent implements OnInit {
  constructor(public serImg: ImagenesService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.updatePublication(this.idPub)
  }

  @Input()
  public idPub: number = this.route.snapshot.params['id']

  @Input()
  public showComments: boolean = true

  username: String = "User"
  userLink: String = "https://www.infobae.com/new-resizer/JgpqrjpSJq8LHnspBvqjJ0S66UQ=/1440x1080/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/07/05182149/dogecoin-1.jpg"
  pictureLink: String = "https://www.infobae.com/new-resizer/JgpqrjpSJq8LHnspBvqjJ0S66UQ=/1440x1080/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/07/05182149/dogecoin-1.jpg"
  likes: number = 100
  description: String = "Juan perez"
  comments: number = 16
  time: any = 30

  async updatePublication(id: number){
    let pictureArray: String[] = await this.serImg.obtenerPublicaciones()
    this.pictureLink = pictureArray[id]
  }
}
