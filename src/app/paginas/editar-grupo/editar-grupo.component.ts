import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { ApiService } from './../../service/api.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-grupo',
  templateUrl: './editar-grupo.component.html',
  styleUrls: ['./editar-grupo.component.css']
})
export class EditarGrupoComponent implements OnInit{
  nomeNovo = "";
  descricaoNova = "";
  nome_ad_novo = "";

  pegatoken="";
  booleanExibir=false;
  booleanExibirRetorno=false;


  nomeAntigo="";
  descricaoAntiga="";
  nome_ad_antigo="";

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  
  ngOnInit(): void {
    this.apiservice.verificaToken(this.pegaToken()).subscribe(
      retorno => {this.permiteExibir(retorno)},
    );
 

  }
  
  constructor(private apiservice:ApiService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.getGrupo(this.activatedRoute.snapshot.params.nome);
   }


  
    getGrupo(nome:String){
      this.apiservice.pesquisa_grupo_especifico(nome,this.pegaToken()).subscribe(
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
    this.apiservice.atualizaGrupo(this.pegaToken(),this.nomeAntigo,this.nomeNovo,this.descricaoNova,this.nome_ad_novo).subscribe(
      (retorno)=> {this.tratamento(retorno)},
      ()=>this.errorMsgComponent.setError('Falha ao atualizar o grupo'),
    );
    }
  }

  pegaToken(){

    this.pegatoken=localStorage.getItem('Token');
    return this.pegatoken

  }

  permiteExibir(r): void{

    if(r['Status']=='Acesso concedido'){
      this.booleanExibir=true;
      this.booleanExibirRetorno=false;

    }

    else if(r['Status']=='Voce nao tem autorizacao!'){
      this.booleanExibir=false;
      this.booleanExibirRetorno=true;
    }

    else if(r['Status']=='Token invalido'){
      this.booleanExibir=false;
      this.booleanExibirRetorno=true;
      
    }

  }
  tratamento(r){

    console.log(r)
    if (r["Status"]=="Ocorreu um erro ao inserir"){

      this.errorMsgComponent.setError('Falha ao criar o Grupo verifique o nome e tente novamente')
    }

    else if(r["Status"]=="Grupo Atualizado"){
      this.router.navigate(['/protected/grupos'])

    }

    else if(r["Status"]=="sem permissao"){
      this.errorMsgComponent.setError('Falha ao criar o Grupo secao expirada')

    }
    else if(r["Status"]=="Grupo nao encontrado no AD"){
      this.errorMsgComponent.setError('Grupo nao encontrado no AD');

    }
  }


}
