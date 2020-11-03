import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private apiservice: ApiService,private router: Router) { }
  public listaNome = [];
  public listaDescricao=[];
  booleanExibir=false;
  booleanExibirRetorno=false;

  pegatoken="";
  
  //nome_para_pesquisa="";
  ngOnInit(): void {
    this.get_todos_banco();
  }

 

  get_todos_banco(){
    this.apiservice.get_todos_grupos(this.pegaToken()).subscribe(
      (retorno)=> {this.lista_todos(retorno)},
      ()=>this.errorMsgComponent.setError('Falha ao buscar os grupos'),
    );
  }


  lista_todos(r){    
    if(r["Status"]=="Banco vazio"){
      this.booleanExibir=true;
      this.booleanExibirRetorno=false;
      window.confirm("Banco vazio");
    }
    
    else if(r['Status']=='Acesso concedido' ){
      this.booleanExibir=true;
      this.booleanExibirRetorno=false;
      this.listaNome=r["Nomes"];
      this.listaDescricao=r["Descricoes"];
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
  
  deleta_do_banco(nome:String){

    const r = window.confirm("Tem certeza disto??");
    if (r){
      this.apiservice.deleta_grupo_banco(nome,this.pegaToken()).subscribe(
        retorno => {this.trataDelecao(retorno) },);

    }

    else{
      window.close();
      }

    }

    trataDelecao(r){

      if(r['Status']=='Acesso concedido' && r['Msg']=='Excluido'){
        this.get_todos_banco();

      }
  
      else if(r['Status']=='Voce nao tem autorizacao!'){
        this.errorMsgComponent.setError('Voce nao tem autorizacao! faca login novamente');
      }
  
      else if(r['Status']=='Token invalido'){
        this.errorMsgComponent.setError('Token invalido! faca login novamente!');
        
      }
      else{
        this.errorMsgComponent.setError('Nao excluido!');
      }


    }



    logout(): void {
      localStorage.removeItem('Token');
      this.router.navigate(['/login']);
    }

    pegaToken(){

      this.pegatoken=localStorage.getItem('Token');
      return this.pegatoken

    }

setaError(error){
  this.errorMsgComponent.setError(error);
}
}
