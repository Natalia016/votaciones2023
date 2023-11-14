import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  private apiUrl = 'http://127.0.0.1:9999/resultados'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getResultados(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
