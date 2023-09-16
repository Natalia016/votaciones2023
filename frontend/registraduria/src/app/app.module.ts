import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
