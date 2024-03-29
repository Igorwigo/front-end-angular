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
    return this.http.post(this.API_ROOT.concat('verifica/token'), data);
  }


  get_todos_grupos(token) {

    const data = {"Token": token};
    return this.http.post(this.API_ROOT.concat('pega/todos/grupo/banco'), data);
  }

  deleta_grupo_banco(nome:String,token){ 
    const data = {"Nome": nome,"Token":token}
    return this.http.post(this.API_ROOT.concat('deleta/grupo/banco'), data);

  }

  pesquisa_grupo_especifico(nome:String,token){
    const data = {"Nome": nome,"Token":token}
    return this.http.post(this.API_ROOT.concat('pesquisa/especifico'), data);
  }

  criaGrupo(nome:String,descricao:String,nome_no_ad:String,token){
  const data = {"Nome": nome,"Descricao":descricao,"Nome_no_AD":nome_no_ad,"Token":token}
  return this.http.post(this.API_ROOT.concat('cria/grupo'), data);
  }

  atualizaGrupo(token,nomeAntigo:String,nomeNovo:String,descricao_nova:String,nome_do_grupo_no_AD_nova:String){
    const data = {"NomeAntigo": nomeAntigo,"NomeNovo":nomeNovo,"DescricaoNova":descricao_nova,"Nome_no_AD_novo":nome_do_grupo_no_AD_nova,"Token":token}
    return this.http.post(this.API_ROOT.concat('editar/grupo'), data);
    }
  

    /* OPERACOES COM USUARIOS**/
    pesquisa_usuario(usuario,token){
      const data = {"Nome_usuario":usuario,"Token":token}
      return this.http.post(this.API_ROOT.concat('busca/usuario'), data);
    }
    busca_memberof(usuario,token){
      const data = {"Nome_usuario":usuario,"Token":token}
      return this.http.post(this.API_ROOT.concat('busca/memberof'), data);
    }
}
