import { Component } from '@angular/core';
import { Mesas } from '../mesas';
import { MesasService } from 'src/app/dashboard/service/mesas.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-mesas',
  templateUrl: './list-mesas.component.html',
  styleUrls: ['./list-mesas.component.css']
})
export class ListMesasComponent {

  mostrarTablaYBotones = true;
  Mesas: Mesas[] = [];

    constructor(private mesasService: MesasService, private router:Router) {}

  ngOnInit(): void {
    this.mesasService.getMesas().subscribe(data => {
      this.Mesas = data;
    });
  }
  onEditMesas(_id:any):void{
    this.router.navigate(["/home-gestion/update-mesas/"+_id]);
  }
  onDeleteMesas(_id:any) {
     if (confirm('¿Estás seguro de que deseas borrar el registro?')) {
       
      this.mesasService.deleteMesasById(_id).subscribe((res:any) => {
          // Manejar la respuesta de la eliminación (puede ser vacía o algún mensaje de confirmación)
          Swal.fire(
            'Eliminada',
            'La Mesa ha sido Eliminada correctamente',
            'success'
          )
          this.router.navigate(["/home-gestion/list-mesas"]);
          // También puedes actualizar la lista de usuarios después de la eliminación
        },
        (error) => {
          console.error('Error al eliminar Mesas:', error);
        }
      );
    }
  }
}
