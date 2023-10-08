import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Usuarios } from './usuario';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  Usuarios: Usuarios[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe(data => {
      this.Usuarios = data;
    });
  }
}
