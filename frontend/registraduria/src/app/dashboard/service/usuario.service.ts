import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Usuarios } from '../pages/usuarios/usuario';
import { AnyError } from 'mongodb';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://127.0.0.1:7777/usuarios'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    const token = localStorage.getItem('access_token');

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.http.get<any[]>(this.apiUrl, { headers });
    } else {
      // Manejar el caso en que no se encuentre el token
      return throwError('Token no encontrado');
    }
  }
  postUser(newUser: any): Observable<any> {
    const token = localStorage.getItem('access_token');

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json' // Especifica el tipo de contenido
      });

      return this.http.post<any>(this.apiUrl, newUser, { headers });
    } else {
      // Manejar el caso en que no se encuentre el token
      return throwError('Token no encontrado');
    }
  }
  deleteUserById(_id: string): Observable<any> {
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
  getuser(_id:any) :Observable<Usuarios>{
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
  editar(_id:any) {
    const token = localStorage.getItem('access_token');
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
  
      const editUrl = `${this.apiUrl}/${_id}`; // URL para eliminar un usuario por ID
  
      return this.http.put(editUrl,{headers});
    } else {
      return throwError('Token no encontrado');
    }
}
}
