import { Component } from '@angular/core';
import { MesasService } from 'src/app/dashboard/service/mesas.service';
import Swal from 'sweetalert2';
import { Mesas } from '../../mesas/mesas';
import { CandidatosService } from '../../../service/candidatos.service';
import { Candidatos } from '../candidato';

@Component({
  selector: 'app-create-candidato',
  templateUrl: './create-candidato.component.html',
  styleUrls: ['./create-candidato.component.css']
})
export class CreateCandidatoComponent {
  candidato: Candidatos = {};

  constructor(private candidatosService: CandidatosService) {} // Inyecta tu servicio de API

  onCreateCandidato() {
    // Llama al método de tu servicio API para enviar los datos a la API
    this.candidatosService.postCandidato(this.candidato).subscribe(
      response => {
        // Maneja la respuesta del servidor aquí si es necesario
        Swal.fire('Candidato creado', 'Candidato creada correctamente', 'success');
      },
      error => {
        // Maneja los errores aquí
        Swal.fire('Error al crear Candidato', error.message, 'error');
      }
    );
  }
  ngOnInit(): void {   
    

}
}

