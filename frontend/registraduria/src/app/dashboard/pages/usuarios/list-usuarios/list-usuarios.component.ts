import { Component } from '@angular/core';
import { Usuarios } from '../usuario';
import { UsuarioService } from 'src/app/dashboard/service/usuario.service';
import { ObjectId } from 'mongodb';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent {
  mostrarTablaYBotones = true;
  Usuarios: Usuarios[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe(data => {
      this.Usuarios = data;
    });
  }
  onDeleteUser(_id:any) {
     if (confirm('¿Estás seguro de que deseas borrar el registro?')) {
       
      this.usuarioService.deleteUserById(_id).subscribe((res:any) => {
          // Manejar la respuesta de la eliminación (puede ser vacía o algún mensaje de confirmación)
          console.log('Usuario eliminado con éxito');
          // También puedes actualizar la lista de usuarios después de la eliminación
          
        },
        (error) => {
          console.error('Error al eliminar usuario:', error);
        }
      );
    }
  }
 }
