import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuario';
import { UsuarioService } from 'src/app/dashboard/service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectId } from 'mongodb';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-usuarios',
  templateUrl: './update-usuarios.component.html',
  styleUrls: ['./update-usuarios.component.css']
})
export class UpdateUsuariosComponent implements OnInit {
  modoCreacion: boolean = true;   // Indica si el componente está en modo creación o edición
  id_usuario: string = "";     // Identificador del estudiante (en caso de edición)
  intentoEnvio: boolean = false;  // Indica si se ha intentado enviar el formulario
  usuario: Usuarios = {    // Objeto que representa los datos del estudiante
    seudonimo:'',
    correo:'',
    contrasena:'',
    estado:true ||false
    
  }

  constructor(private usuarioService: UsuarioService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // Si se recibe un parámetro "id_estudiante" en la URL, se está en modo edición
    if (this.rutaActiva.snapshot.params['id_usuario']) {   
      this.modoCreacion = false;
      this.id_usuario = this.rutaActiva.snapshot.params['id_usuario'];// Obtiene el valor del parámetro "id_estudiante" de la URL y lo asigna a la variable "id_estudiante"
      this.getUser(this.id_usuario)
    } else {
      this.modoCreacion = true; // Si no hay valor para "id_estudiante", establece el modo de creación a verdadero, indica que se encuentra en modo de creación
    }
  }
  // Obtiene los datos del estudiante utilizando el servicio de estudiantes
  getUser(_id: any) {
    this.usuarioService.getuser(_id).
      subscribe(data => {
        this.usuario = data;
      });
  }
  
  
  // Edita los datos del estudiante utilizando el servicio de estudiantes
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {   
      this.usuarioService.editar(this.usuario._id).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El estudiante ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["/home-gestion/list-usuarios"]);
        });
    }
  }
  // Valida si todos los campos obligatorios están completos
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.usuario.seudonimo=="" || 
       this.usuario.correo=="" || 
       this.usuario.contrasena==""){    
      return false;
    }else{
      return true;
    }
  }
}
