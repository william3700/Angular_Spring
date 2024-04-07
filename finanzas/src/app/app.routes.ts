import { Routes } from '@angular/router';
import { AgregarComponent } from './usuarios/agregar/agregar.component';
import { EditarComponent } from './usuarios/editar/editar.component';
import { ListarComponent } from './usuarios/listar/listar.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    { path: 'agregar', component: AgregarComponent },
    { path: 'editar',  component: EditarComponent },
    { path: 'listar',  component: ListarComponent },
    { path: 'inicio',  component: InicioComponent }
];
