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
import { ListMesasComponent } from './dashboard/pages/mesas/list-mesas/list-mesas.component';
import { CreateMesasComponent } from './dashboard/pages/mesas/create-mesas/create-mesas.component';
import { UpdateMesasComponent } from './dashboard/pages/mesas/update-mesas/update-mesas.component';
import { ListPartidosComponent } from './dashboard/pages/partidos/list-partidos/list-partidos.component';
import { CreatePartidosComponent } from './dashboard/pages/partidos/create-partidos/create-partidos.component';
import { ListUsuariosComponent } from './dashboard/pages/usuarios/list-usuarios/list-usuarios.component';
import { CreateUsuariosComponent } from './dashboard/pages/usuarios/create-usuarios/create-usuarios.component';
import { UpdateUsuariosComponent } from './dashboard/pages/usuarios/update-usuarios/update-usuarios.component';
import { UpdatePartidosComponent } from './dashboard/pages/partidos/update-partidos/update-partidos.component';
import { ListRolesComponent } from './dashboard/pages/roles/list-roles/list-roles.component';
import { CreateRolesComponent } from './dashboard/pages/roles/create-roles/create-roles.component';
import { UpdateRolesComponent } from './dashboard/pages/roles/update-roles/update-roles.component';
import { ListPermisosComponent } from './dashboard/pages/permisos/list-permisos/list-permisos.component';
import { CreatePermisosComponent } from './dashboard/pages/permisos/create-permisos/create-permisos.component';
import { UpdatePermisosComponent } from './dashboard/pages/permisos/update-permisos/update-permisos.component';
import { ListCandidatoComponent } from './dashboard/pages/candidatos/list-candidato/list-candidato.component';
import { CreateCandidatoComponent } from './dashboard/pages/candidatos/create-candidato/create-candidato.component';
import { UpdateCandidatoComponent } from './dashboard/pages/candidatos/update-candidato/update-candidato.component';

const routes: Routes = [
{ path: '', redirectTo: '/home/descripcion', pathMatch: 'full' },
{ path: 'login',component:LoginComponent},
{path:'home',component :HomeComponent,
children:[{path:'descripcion',component:DescripcionComponent},{path:'mision',component:MisionComponent},{path:'vision',component:VisionComponent}]
},
{ path: 'home-gestion',component:HomeGestionComponent,
children:[
  {path: 'gestion' ,component :GestionComponent},
  {path:'list-usuarios',component:ListUsuariosComponent},
  {path:'create-usuarios',component:CreateUsuariosComponent},
  {path: 'mesas' ,component :MesasComponent,children:[
    {path:'list',component:ListMesasComponent},
    {path:'create',component:CreateMesasComponent},
    {path:'update',component:UpdateMesasComponent},
  ]},
  {path: 'partidos' ,component :PartidosComponent,
  children:[
    {path:'list',component:ListPartidosComponent},
    {path:'create',component:CreatePartidosComponent},
    {path:'update',component:UpdatePartidosComponent},  
  ]},
  {path: 'usuarios' ,component :UsuariosComponent,
  children:[
    
    
    {path:'update',component:UpdateUsuariosComponent},  
  ]},
  {path: 'roles' ,component :RolesComponent,
  children:[
    {path:'list',component:ListRolesComponent},
    {path:'create',component:CreateRolesComponent},
    {path:'update',component:UpdateRolesComponent},  
  ]
  },
  {path: 'permisos' ,component :PermisosComponent,
  children:[
    {path:'list',component:ListPermisosComponent},
    {path:'create',component:CreatePermisosComponent},
    {path:'update',component:UpdatePermisosComponent},  
  ]
  },
  {path: 'candidatos' ,component :CandidatosComponent,
  children:[
    {path:'list',component:ListCandidatoComponent},
    {path:'create',component:CreateCandidatoComponent},
    {path:'update',component:UpdateCandidatoComponent},  
  ]
  }

]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
