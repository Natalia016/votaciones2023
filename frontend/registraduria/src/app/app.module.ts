import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthenticationService } from './login/services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { SidenavComponent } from './dashboard/components/sidenav/sidenav.component';
import { BodyComponent } from './dashboard/components/body/body.component';
import { HomeGestionComponent } from './dashboard/components/home-gestion/home-gestion.component';
import { UsuariosComponent } from './dashboard/pages/usuarios/usuarios.component';
import { PermisosComponent } from './dashboard/pages/permisos/permisos.component';
import { RolesComponent } from './dashboard/pages/roles/roles.component';
import { PartidosComponent } from './dashboard/pages/partidos/partidos.component';
import { MesasComponent } from './dashboard/pages/mesas/mesas.component';
import { GestionComponent } from './dashboard/pages/gestion/gestion.component';
import { CandidatosComponent } from './dashboard/pages/candidatos/candidatos.component';
import { CreateCandidatoComponent } from './dashboard/pages/candidatos/create-candidato/create-candidato.component';
import { ListCandidatoComponent } from './dashboard/pages/candidatos/list-candidato/list-candidato.component';
import { UpdateCandidatoComponent } from './dashboard/pages/candidatos/update-candidato/update-candidato.component';
import { CreateMesasComponent } from './dashboard/pages/mesas/create-mesas/create-mesas.component';
import { ListMesasComponent } from './dashboard/pages/mesas/list-mesas/list-mesas.component';
import { UpdateMesasComponent } from './dashboard/pages/mesas/update-mesas/update-mesas.component';
import { CreatePartidosComponent } from './dashboard/pages/partidos/create-partidos/create-partidos.component';
import { ListPartidosComponent } from './dashboard/pages/partidos/list-partidos/list-partidos.component';
import { UpdatePartidosComponent } from './dashboard/pages/partidos/update-partidos/update-partidos.component';
import { ListPermisosComponent } from './dashboard/pages/permisos/list-permisos/list-permisos.component';
import { CreatePermisosComponent } from './dashboard/pages/permisos/create-permisos/create-permisos.component';
import { UpdatePermisosComponent } from './dashboard/pages/permisos/update-permisos/update-permisos.component';
import { ListRolesComponent } from './dashboard/pages/roles/list-roles/list-roles.component';
import { CreateRolesComponent } from './dashboard/pages/roles/create-roles/create-roles.component';
import { UpdateRolesComponent } from './dashboard/pages/roles/update-roles/update-roles.component';
import { ListUsuariosComponent } from './dashboard/pages/usuarios/list-usuarios/list-usuarios.component';
import { UpdateUsuariosComponent } from './dashboard/pages/usuarios/update-usuarios/update-usuarios.component';
import { CreateUsuariosComponent } from './dashboard/pages/usuarios/create-usuarios/create-usuarios.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DescripcionComponent,
    MisionComponent,
    VisionComponent,
    LoginComponent,
    SidenavComponent,
    BodyComponent,
    HomeGestionComponent,
    UsuariosComponent,
    PermisosComponent,
    RolesComponent,
    PartidosComponent,
    MesasComponent,
    GestionComponent,
    CandidatosComponent,
    CreateCandidatoComponent,
    ListCandidatoComponent,
    UpdateCandidatoComponent,
    CreateMesasComponent,
    ListMesasComponent,
    UpdateMesasComponent,
    CreatePartidosComponent,
    ListPartidosComponent,
    UpdatePartidosComponent,
    ListPermisosComponent,
    CreatePermisosComponent,
    UpdatePermisosComponent,
    ListRolesComponent,
    CreateRolesComponent,
    UpdateRolesComponent,
    ListUsuariosComponent,
    UpdateUsuariosComponent,
    CreateUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
