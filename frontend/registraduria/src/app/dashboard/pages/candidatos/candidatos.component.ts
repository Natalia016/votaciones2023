import { Component } from '@angular/core';
import { CandidatosService } from '../../service/candidatos.service';
import { Candidatos } from './candidato';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent { 
  Candidatos: Candidatos[] = [];

  constructor(private candidatosService: CandidatosService) {}

  ngOnInit(): void {
    this.candidatosService.getCandidatos().subscribe(data  => {
      this.Candidatos = data;
    });
  }

}
