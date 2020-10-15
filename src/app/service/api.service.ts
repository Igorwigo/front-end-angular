import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler/src/ml_parser/lexer';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private readonly API_ROOT =  `${environment.urlAPI}`;


/**
  postLogin(usuario, password) {
    const data = {"Login": usuario, "Senha": password};
    return this.http.get('https://viacep.com.br/ws/01001000/json/');
  }
*/

  postLogin(usuario, password) {
    const data = {"Login": usuario, "Senha": password};
    return this.http.post(this.API_ROOT.concat('auth/login'), data);
  }







  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}
