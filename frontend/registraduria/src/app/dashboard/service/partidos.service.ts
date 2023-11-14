import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Partidos } from '../pages/partidos/partidos';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  private apiUrl = 'http://127.0.0.1:7777/partidos'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getPartidos(): Observable<any[]> {
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
postPartido(newMesa: any): Observable<any> {
  const token = localStorage.getItem('access_token');

  if (token) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json' // Especifica el tipo de contenido
    });

    return this.http.post<any>(this.apiUrl, newMesa, { headers });
  } else {
    // Manejar el caso en que no se encuentre el token
    return throwError('Token no encontrado');
  }
}
deletePartidoById(_id: string): Observable<any> {
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
getPartido(_id:any) :Observable<Partidos>{
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
putPartidos(_id:any,partidos:Partidos) {
  const token = localStorage.getItem('access_token');
  if (token) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const editUrl = `${this.apiUrl}/${_id}`; // URL para eliminar un usuario por ID

    return this.http.put(editUrl,partidos,{headers});
  } else {
    return throwError('Token no encontrado');
  }
}
}


