import { Component } from '@angular/core';
import { MesasService } from 'src/app/dashboard/service/mesas.service';
import { Mesas } from '../mesas';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-mesas',
  templateUrl: './create-mesas.component.html',
  styleUrls: ['./create-mesas.component.css']
})
export class CreateMesasComponent {
  mesas: Mesas = {      
    cantidad_inscritos: '',
    numero: ''
  };

  constructor(private mesasService: MesasService) {} // Inyecta tu servicio de API

  onCreateMesas() {
    // Llama al método de tu servicio API para enviar los datos a la API
    this.mesasService.postMesas(this.mesas).subscribe(
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
