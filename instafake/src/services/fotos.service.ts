import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo, CameraPhoto } from '@capacitor/camera';

export interface UserPhoto {
  webviewPath: string;
}

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor() { }
  public async tomarFoto(): Promise<UserPhoto> {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    return {
      webviewPath: capturedPhoto.webPath!
    }
  }
}
