import { Component, OnInit } from '@angular/core';
import { Mesas } from '../mesas';
import { MesasService } from 'src/app/dashboard/service/mesas.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-mesas',
  templateUrl: './update-mesas.component.html',
  styleUrls: ['./update-mesas.component.css']
})
export class UpdateMesasComponent implements OnInit {
  modoCreacion: boolean = true;   // Indica si el componente está en modo creación o edición
  id_mesas: string = "";     // Identificador del estudiante (en caso de edición)
  intentoEnvio: boolean = false;  // Indica si se ha intentado enviar el formulario
  mesas: Mesas = {    // Objeto que representa los datos del estudiante
    cantidad_inscritos:'',
    numero:'',
    
  }

  constructor(private mesasService: MesasService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // Si se recibe un parámetro "id_estudiante" en la URL, se está en modo edición
    if (this.rutaActiva.snapshot.params['id_mesas']) {   
      this.modoCreacion = false;
      this.id_mesas = this.rutaActiva.snapshot.params['id_mesas'];// Obtiene el valor del parámetro "id_estudiante" de la URL y lo asigna a la variable "id_estudiante"
      this.getMesa(this.id_mesas)
    } else {
      this.modoCreacion = true; // Si no hay valor para "id_estudiante", establece el modo de creación a verdadero, indica que se encuentra en modo de creación
    }
  }
  // Obtiene los datos del estudiante utilizando el servicio de estudiantes
  getMesa(_id: any) {
    this.mesasService.getMesa(_id).
      subscribe(data => {
        this.mesas = data;
      });
  }
  
  
  // Edita los datos del estudiante utilizando el servicio de estudiantes
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {   
      this.mesasService.editar(this.mesas._id,this.mesas).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El estudiante ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["/home-gestion/list-mesas"]);
        });
    }
  }
  // Valida si todos los campos obligatorios están completos
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.mesas.cantidad_inscritos=="" || 
       this.mesas.numero=="" ){    
      return false;
    }else{
      return true;
    }
  }
}
