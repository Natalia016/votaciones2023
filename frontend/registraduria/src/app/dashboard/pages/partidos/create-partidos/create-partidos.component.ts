import { Component } from '@angular/core';
import { PartidosService } from '../../../service/partidos.service';
import Swal from 'sweetalert2';
import { Partidos } from '../partidos';

@Component({
  selector: 'app-create-partidos',
  templateUrl: './create-partidos.component.html',
  styleUrls: ['./create-partidos.component.css']
})
export class CreatePartidosComponent {
  partidos: Partidos = {      
    lema:'',
    nombre:''
  }

  constructor(private partidosService: PartidosService) {} // Inyecta tu servicio de API

  onCreateMesas() {
    // Llama al método de tu servicio API para enviar los datos a la API
    this.partidosService.postPartido(this.partidos).subscribe(
      response => {
        // Maneja la respuesta del servidor aquí si es necesario
        Swal.fire('Mesa creado', 'Mesa creada correctamente', 'success');
      },
      error => {
        // Maneja los errores aquí
        Swal.fire('Error al crear Mesa', error.message, 'error');
      }
    );
  }
  ngOnInit(): void {   
    

}
}
