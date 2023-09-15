import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = '';
  placeholder_email='Ingrese su correo';
  placeholder_password='Contraseña';

  constructor( private router:Router, private authService: AuthenticationService,) {}

  onLogin(correo: string, contrasena: string): void {
    this.authService.login(correo, contrasena).subscribe(
      (response: { token: any; }) => {
        const token = response.token;

        // Almacena el token en el almacenamiento local o en una cookie para su posterior uso.
        localStorage.setItem('access_token', token);
        
        this.router.navigate(['/home/dashboard']);
        

        // Redirige al usuario a la página de inicio o a la ubicación deseada.
        // Puedes utilizar el enrutador de Angular para hacer esto.
      },
      (error) => {
        if (error.status === 401) {
          // Credenciales incorrectas
          console.error('Credenciales incorrectas.');
        } else if (error.status === 500) {
          // Error del servidor
          console.error('Error del servidor:', error.error.message);
        } else {
          // Otro tipo de error
          console.error('Error desconocido:', error);
        }
      }
    );
  }
}