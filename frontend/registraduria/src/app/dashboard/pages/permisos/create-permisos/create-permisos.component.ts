import { Component } from '@angular/core';
import { Permisos } from '../permisos';
import { PermisosService } from 'src/app/dashboard/service/permisos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-permisos',
  templateUrl: './create-permisos.component.html',
  styleUrls: ['./create-permisos.component.css']
})
export class CreatePermisosComponent {  
  permisos: Permisos = {
    url: '',
    metodo: '',
  };

  constructor(private permisosService: PermisosService) {} // Inyecta tu servicio de API

  onCreatePermiso() {
    // Llama al método de tu servicio API para enviar los datos a la API
    this.permisosService.postPermisos(this.permisos).subscribe(
      response => {
        // Maneja la respuesta del servidor aquí si es necesario
        Swal.fire('Permiso creado', 'Permiso creado correctamente', 'success');
      },
      error => {
        // Maneja los errores aquí
        Swal.fire('Error al crear Permiso', error.message, 'error');
      }
    );
  }
  ngOnInit(): void {

  }
}
