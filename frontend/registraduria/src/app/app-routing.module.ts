import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';

const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login',component:LoginComponent},
{path:'home',component :HomeComponent,
children:[{path:'descripcion',component:DescripcionComponent},{path:'mision',component:MisionComponent},{path:'vision',component:VisionComponent}]
},
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
