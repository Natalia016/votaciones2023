import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { HomeGestionComponent } from './dashboard/components/home-gestion/home-gestion.component';
import { GestionComponent } from './dashboard/pages/gestion/gestion.component';
import { MesasComponent } from './dashboard/pages/mesas/mesas.component';
import { PartidosComponent } from './dashboard/pages/partidos/partidos.component';
import { UsuariosComponent } from './dashboard/pages/usuarios/usuarios.component';
import { RolesComponent } from './dashboard/pages/roles/roles.component';
import { PermisosComponent } from './dashboard/pages/permisos/permisos.component';
import { CandidatosComponent } from './dashboard/pages/candidatos/candidatos.component';

const routes: Routes = [
{ path: '', redirectTo: '/home/descripcion', pathMatch: 'full' },
{ path: 'login',component:LoginComponent},
{path:'home',component :HomeComponent,
children:[{path:'descripcion',component:DescripcionComponent},{path:'mision',component:MisionComponent},{path:'vision',component:VisionComponent}]
},
{ path: 'home-gestion',component:HomeGestionComponent,
children:[
  {path: 'gestion' ,component :GestionComponent},
  {path: 'mesas' ,component :MesasComponent},
  {path: 'partidos' ,component :PartidosComponent},
  {path: 'usuarios' ,component :UsuariosComponent},
  {path: 'roles' ,component :RolesComponent},
  {path: 'permisos' ,component :PermisosComponent},
  {path: 'candidatos' ,component :CandidatosComponent}
]},

 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
