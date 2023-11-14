import { Component } from '@angular/core';
import { Candidatos } from '../candidato';
import { CandidatosService } from 'src/app/dashboard/service/candidatos.service';

@Component({
  selector: 'app-list-candidato',
  templateUrl: './list-candidato.component.html',
  styleUrls: ['./list-candidato.component.css']
})
export class ListCandidatoComponent {
  Candidatos: Candidatos[] = [];

  constructor(private candidatosService: CandidatosService) {}

  ngOnInit(): void {
    this.candidatosService.getCandidatos().subscribe(data  => {
      this.Candidatos = data;
    });
  }

}


