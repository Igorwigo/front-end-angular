import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler/src/ml_parser/lexer';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }



  getLogin(): Observable<Token>{
    const url =  `{enviroment.urlAPI/auth/login`;
    return this.http.get<Token>(url);
  }
}
