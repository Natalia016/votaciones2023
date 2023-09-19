import { Component } from '@angular/core';
import { RolesService } from '../../service/roles.service';
import { Roles } from './roles';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {
  Roles: Roles[] = [];

  constructor(private rolesService: RolesService) {}

  ngOnInit(): void {
    this.rolesService.getRoles().subscribe(data  => {
      this.Roles= data;
    });
  }

}
