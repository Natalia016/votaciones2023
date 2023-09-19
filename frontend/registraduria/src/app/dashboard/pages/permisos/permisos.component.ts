import { Component } from '@angular/core';
import { Permisos } from './permisos';
import { PermisosService } from '../../service/permisos.service';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent {
  Permisos: Permisos[] = [];

  constructor(private permisosService: PermisosService) {}

  ngOnInit(): void {
    this.permisosService.getPermisos().subscribe(data  => {
      this.Permisos= data;
    });
  }
}
