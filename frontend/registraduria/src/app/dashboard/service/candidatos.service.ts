import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Candidatos } from '../pages/candidatos/candidato';
import { Partidos } from '../pages/partidos/partidos';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {
  private apiUrl = 'http://127.0.0.1:7777/candidatos'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getCandidatos(): Observable<any[]> {
    const token = localStorage.getItem('access_token');

    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.http.get<any[]>(this.apiUrl, { headers });
    } else {
      // Manejar el caso en que no se encuentre el token
      return throwError('Token no encontrado');
    }
}
postCandidato(newCandidato: any): Observable<any> {
  const token = localStorage.getItem('access_token');

  if (token) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json' // Especifica el tipo de contenido
    });

    return this.http.post<any>(this.apiUrl, newCandidato, { headers });
  } else {
    // Manejar el caso en que no se encuentre el token
    return throwError('Token no encontrado');
  }
}
deleteMesasById(_id: string): Observable<any> {
  const token = localStorage.getItem('access_token');
  if (token) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const deleteUrl = `${this.apiUrl}/${_id}`; // URL para eliminar un usuario por ID

    return this.http.delete(deleteUrl, { headers });
  } else {
    return throwError('Token no encontrado');
  }
}
getCandidato(_id:any) :Observable<Candidatos>{
  const token = localStorage.getItem('access_token');
  if (token) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const listUrl = `${this.apiUrl}/${_id}`; // URL para eliminar un usuario por ID

    return this.http.get(listUrl, { headers });
  } else {
    return throwError('Token no encontrado');
  }
  
}
putCandidato(_id:any,candidatos:Candidatos) {
  const token = localStorage.getItem('access_token');
  if (token) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const editUrl = `${this.apiUrl}/${_id}`; // URL para eliminar un usuario por ID

    return this.http.put(editUrl,candidatos,{headers});
  } else {
    return throwError('Token no encontrado');
  }
}
}


