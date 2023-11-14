import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Mesas } from '../pages/mesas/mesas';
@Injectable({
  providedIn: 'root'
})
export class MesasService {
  private apiUrl = 'http://127.0.0.1:7777/mesas'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getMesas(): Observable<any[]> {
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
  postMesas(newMesa: any): Observable<any> {
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
  getMesa(_id:any) :Observable<Mesas>{
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
  editar(_id:any,mesas:Mesas) {
    const token = localStorage.getItem('access_token');
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
  
      const editUrl = `${this.apiUrl}/${_id}`; // URL para eliminar un usuario por ID
  
      return this.http.put(editUrl,mesas,{headers});
    } else {
      return throwError('Token no encontrado');
    }
}
}
