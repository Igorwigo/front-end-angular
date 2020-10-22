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

  verificaToken(token) {
    const data = {"Token": token};
    return this.http.post(this.API_ROOT.concat('/verifica/token'), data);
  }


  get_todos_grupos() {
    return this.http.get(this.API_ROOT.concat('/pega/todos/grupo/banco'));
  }

  deleta_grupo_banco(nome){ 
    const data = {"Nome": nome}
    return this.http.post(this.API_ROOT.concat('/deleta/grupo/banco'), data);

  }

  pesqusa_nome_especifico(nome){
    const data = {"Nome": nome}
    return this.http.post(this.API_ROOT.concat('/pesquisa/especifico'), data);
  }

  criaGrupo(nome,descricao,nome_no_ad){
  const data = {"Nome": nome,"Descricao":descricao,"Nome_no_AD":nome_no_ad}
  return this.http.post(this.API_ROOT.concat('/cria/grupo'), data);
  }

  editarGrupo(nomeAntigo,nomeNovo,descricao_nova,nome_do_grupo_no_AD_nova){
    const data = {"NomeAntigo": nomeAntigo,"NomeNovo":nomeNovo,"DescricaoNova":descricao_nova,"Nome_no_AD_novo":nome_do_grupo_no_AD_nova}
    return this.http.post(this.API_ROOT.concat('/editar/grupo'), data);
    }
  

}
