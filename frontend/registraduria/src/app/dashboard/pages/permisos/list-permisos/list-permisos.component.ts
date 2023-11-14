import { Component } from '@angular/core';
import { Permisos } from '../permisos';
import { PermisosService } from 'src/app/dashboard/service/permisos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-permisos',
  templateUrl: './list-permisos.component.html',
  styleUrls: ['./list-permisos.component.css']
})
export class ListPermisosComponent {
  Permisos: Permisos[] = [];

  constructor(private permisosService: PermisosService) {}

  ngOnInit(): void {
    this.permisosService.getPermisos().subscribe(data  => {
      this.Permisos= data;
    });
  }
  onDeletePermisos(_id:any) {
    if (confirm('¿Estás seguro de que deseas borrar el registro?')) {
      
     this.permisosService.deletepermisosById(_id).subscribe((res:any) => {
         // Manejar la respuesta de la eliminación (puede ser vacía o algún mensaje de confirmación)
         Swal.fire('Permiso Eliminado', 'Permiso Eliminado correctamente', 'success');
        },
        error => {
          // Maneja los errores aquí
          Swal.fire('Error al Eliminar Permiso', error.message, 'error');
        },
         // También puedes actualizar la lista de usuarios después de la eliminación
    
     );
   }
 }
}
