import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {
  private apiUrl = 'http://127.0.0.1:7777/permisos'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getPermisos(): Observable<any[]> {
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
  postPermisos(newPermiso: any): Observable<any> {
    const token = localStorage.getItem('access_token');

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json' // Especifica el tipo de contenido
      });

      return this.http.post<any>(this.apiUrl, newPermiso, { headers });
    } else {
      // Manejar el caso en que no se encuentre el token
      return throwError('Token no encontrado');
    }
  }
  deletepermisosById(_id: string): Observable<any> {
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
}
