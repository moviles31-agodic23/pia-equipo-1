import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export type Usuario = {
  username: string,
  profesion: string,
  descripcion: string
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUsuarios: AngularFirestore = inject(AngularFirestore)
  auth: AngularFireAuth = inject(AngularFireAuth)
  constructor() { }
  async actualizarDescripcion(descripcion: Usuario): Promise<string> {
    let uid: string | undefined = await this.auth.currentUser.then(datos => datos?.uid)
    if (!uid) return "";
    this.baseUsuarios.collection("usuario").doc(uid).set(
      descripcion
    )
    return uid
  }
  obtenerDescripcion(uid: string): Observable<Usuario | undefined> {
    return this.baseUsuarios
      .collection('usuario')
      .doc<Usuario>(uid)
      .valueChanges();
  }
}
