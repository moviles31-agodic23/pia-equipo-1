import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo, CameraPhoto } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
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
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath!
    }
  }
}
