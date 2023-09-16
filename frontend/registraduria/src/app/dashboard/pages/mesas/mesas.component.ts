import { Component } from '@angular/core';
import { MesasService } from '../../service/mesas.service';
import { Mesas } from './mesas';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent {
  Mesas: Mesas[] = [];

  constructor(private mesasService: MesasService) {}

  ngOnInit(): void {
    this.mesasService.getMesas().subscribe(data => {
      this.Mesas = data;
    });
  }
}
