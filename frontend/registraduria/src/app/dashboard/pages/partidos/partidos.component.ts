import { Component } from '@angular/core';
import { PartidosService } from '../../service/partidos.service';
import { Partidos } from './partidos';


@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent {
  Partidos: Partidos[] = [];

  constructor(private partidosService: PartidosService) {}

  ngOnInit(): void {
    this.partidosService.getPartidos().subscribe(data  => {
      this.Partidos= data;
    });
  }

}





