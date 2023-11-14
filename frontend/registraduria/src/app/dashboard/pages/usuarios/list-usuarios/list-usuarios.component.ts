import { Component } from '@angular/core';
import { Usuarios } from '../usuario';
import { UsuarioService } from 'src/app/dashboard/service/usuario.service';
import { ObjectId } from 'mongodb';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent {
  mostrarTablaYBotones = true;
  Usuarios: Usuarios[] = [];

  constructor(private usuarioService: UsuarioService, private router:Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }
  onEditUser(_id:any):void{
    this.router.navigate(["/home-gestion/update-usuarios/"+_id]);
  }
  onDeleteUser(_id:any) {
    if (confirm('¿Estás seguro de que deseas borrar el registro?')) {
      
     this.usuarioService.deleteUserById(_id).subscribe((res:any) => {
         // Manejar la respuesta de la eliminación (puede ser vacía o algún mensaje de confirmación)
         Swal.fire(
           'Eliminado',
           'Usuario ha sido Eliminado correctamente',
           'success'
         )
         this.router.navigate(["/home-gestion/list-usuarios"]);
         // También puedes actualizar la lista de usuarios después de la eliminación
       },
       (error) => {
         console.error('Error al eliminar usuario:', error);
       }
     );
   }
 }
  loadUsers() {
    this.usuarioService.getUsers().subscribe((data: Usuarios[]) => {
      this.Usuarios = data;
    });
  }
 }
