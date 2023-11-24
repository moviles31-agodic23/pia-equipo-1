import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FeedComponent } from './feed/feed.component';
import { DetallePublicacionComponent } from './detalle-publicacion/detalle-publicacion.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  { path: 'perfil', component: PerfilComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'detallePublicacion/:id', component: DetallePublicacionComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'feed', component: FeedComponent, ...canActivate(redirectUnauthorizedToLogin) },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',

  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
