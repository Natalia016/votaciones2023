import { Component } from '@angular/core';
import { Partidos } from '../partidos';
import { PartidosService } from 'src/app/dashboard/service/partidos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-partidos',
  templateUrl: './list-partidos.component.html',
  styleUrls: ['./list-partidos.component.css']
})
export class ListPartidosComponent {
  mostrarTablaYBotones = true;
  Partidos: Partidos[] = [];

    constructor(private partidosService: PartidosService, private router:Router) {}

  ngOnInit(): void {
    this.partidosService.getPartidos().subscribe(data => {
      this.Partidos = data;
    });
  }
  onEditPartidos(_id:any):void{
    this.router.navigate(["/home-gestion/update-mesas/"+_id]);
  }
  onDeletePartidos(_id:any) {
     if (confirm('¿Estás seguro de que deseas borrar el registro?')) {
       
      this.partidosService.deletePartidoById(_id).subscribe((res:any) => {
          // Manejar la respuesta de la eliminación (puede ser vacía o algún mensaje de confirmación)
          Swal.fire(
            'Eliminada',
            'La Mesa ha sido Eliminada correctamente',
            'success'
          )
          this.router.navigate(["/home-gestion/list-partidos"]);
          // También puedes actualizar la lista de usuarios después de la eliminación
        },
        (error) => {
          console.error('Error al eliminar Mesas:', error);
        }
      );
    }
  }
}
