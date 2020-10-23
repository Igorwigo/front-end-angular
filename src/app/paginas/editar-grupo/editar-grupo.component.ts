import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { ApiService } from './../../service/api.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-grupo',
  templateUrl: './editar-grupo.component.html',
  styleUrls: ['./editar-grupo.component.css']
})
export class EditarGrupoComponent {
  nomeNovo = "";
  descricaoNova = "";
  nome_ad_novo = "";




  nomeAntigo="";
  descricaoAntiga="";
  nome_ad_antigo="";

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  
  
  
  constructor(private apiservice:ApiService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.getGrupo(this.activatedRoute.snapshot.params.nome);
   }


  
    getGrupo(nome:String){
      this.apiservice.pesqusa_grupo_especifico(nome).subscribe(
        (retorno)=> {this.atribui_as_variaveis(retorno)},
        ()=>this.errorMsgComponent.setError('Falha ao buscar o grupo'),
      );
    }


    atribui_as_variaveis(retorno){
      this.nomeAntigo=retorno["Nome"];
      this.descricaoAntiga=retorno["Descricao"];
      
      this.nome_ad_antigo=retorno["Nome_no_AD"];
    }


  atualizaGrupo(){

    const r = window.confirm("Tem certeza que deseja salvar?");
    if (r){
    this.apiservice.atualizaGrupo(this.nomeAntigo,this.nomeNovo,this.descricaoNova,this.nome_ad_novo).subscribe(
      () => { this.router.navigateByUrl('/protected/grupos'); },
      ()=>this.errorMsgComponent.setError('Falha ao atualizar o grupo'),
    );
    }
  }
  
  logout(): void {
    localStorage.removeItem('Token');
    this.router.navigate(['/login']);
  }
  
}
