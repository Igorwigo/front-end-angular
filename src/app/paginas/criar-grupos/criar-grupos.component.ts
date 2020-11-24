import { ApiService } from './../../service/api.service';
import { Router } from '@angular/router';
import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-grupos',
  templateUrl: './criar-grupos.component.html',
  styleUrls: ['./criar-grupos.component.css']
})
export class CriarGruposComponent implements OnInit{
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  nome = "";
  descricao="";
  nome_no_ad ="";
  pegatoken="";
  booleanExibir=false;
  booleanExibirRetorno=false;
  constructor(private apiservice: ApiService,private router: Router) { }
  ngOnInit(): void {
    
    this.apiservice.verificaToken(this.pegaToken()).subscribe(
     retorno => {this.permiteExibir(retorno)},
   );

    
  }
  criaGrupo(){  
    
    this.apiservice.criaGrupo(this.nome, this.descricao, this.nome_no_ad,this.pegaToken()).subscribe(
      (retorno)=> {this.tratamento(retorno)},
      ()=>this.errorMsgComponent.setError('Falha ao Criar'),
    );
    }



    tratamento(r){

      if (r["Status"]=="Ocorreu um erro ao inserir"){

        this.errorMsgComponent.setError('Falha ao criar o Grupo verifique se já existe e tente novamente')
      }

      else if(r["Status"]=="Grupo Criado"){
        this.router.navigate(['/protected/grupos'])

      }

      else if(r["Status"]=="sem permissao"){
        this.errorMsgComponent.setError('Falha ao criar o Grupo secao expirada')

      }
      else if(r["Status"]=="Grupo nao encontrado no AD"){
        this.errorMsgComponent.setError('Grupo nao encontrado no AD');

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
  

}
