import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuario';
import { UsuarioService } from 'src/app/dashboard/service/usuario.service';
import { Roles } from '../../roles/roles';
import { RolesService } from 'src/app/dashboard/service/roles.service';


@Component({
  selector: 'app-create-usuarios',
  templateUrl: './create-usuarios.component.html',
  styleUrls: ['./create-usuarios.component.css']
})
export class CreateUsuariosComponent implements OnInit{
  
  roles: Roles[] = [];
  
  usuario: Usuarios = {
    seudonimo: '',
    correo: '',
    contrasena:'',
    estado: true,
  };

  constructor(private usuarioService: UsuarioService,private rolesService: RolesService) {} // Inyecta tu servicio de API

  onCreateUser() {
    // Llama al método de tu servicio API para enviar los datos a la API
    this.usuarioService.postUser(this.usuario).subscribe(
      response => {
        // Maneja la respuesta del servidor aquí si es necesario
        console.log('Usuario creado:', response);
      },
      error => {
        // Maneja los errores aquí
        console.error('Error al crear usuario:', error);
      }
    );
  }
  ngOnInit(): void {
    this.rolesService.getRoles().subscribe(
      roles => {
        this.roles = roles;
      },
      error => {
        console.error('Error al obtener los roles:', error);
      }
    );
  }

}
