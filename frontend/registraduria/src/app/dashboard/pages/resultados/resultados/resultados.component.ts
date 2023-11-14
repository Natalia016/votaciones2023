import { Component } from '@angular/core';
import { ResultadosService } from 'src/app/dashboard/service/resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  resultados: any[] = [];
  constructor(private resultadosService: ResultadosService) { }

  ngOnInit() {
    this.resultadosService.getResultados().subscribe(data => {
      this.resultados = data;
    });
  }
}
