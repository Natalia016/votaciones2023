import { Injectable } from '@angular/core';
import { HttpClient,HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
 } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private authToken: string | null = null;
  islogin=true;
  private apiUrl = 'http://127.0.0.1:7777'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  login(correo: string, contrasena: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { correo, contrasena });
  }
  setAuthToken(token: string) {
    this.authToken = token;
  }

  getAuthToken() {
    return this.authToken;
  }
}