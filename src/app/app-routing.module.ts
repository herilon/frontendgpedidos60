import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'seguridad', loadChildren: () => import('./modulos/seguridad/seguridad.module').then(x => x.SeguridadModule) },
  { path: 'pedidos', loadChildren: () => import('./modulos/pedidos/pedidos.module').then(x => x.PedidosModule) },
  { path: 'personas', loadChildren: () => import('./modulos/personas/personas.module').then(x => x.PersonasModule) },
  { path: 'productos', loadChildren: () => import('./modulos/productos/productos.module').then(x => x.ProductosModule) },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
