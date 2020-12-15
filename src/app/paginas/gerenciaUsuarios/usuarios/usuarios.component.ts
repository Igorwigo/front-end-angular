import { ErrorMsgComponent } from './../../../compartilhado/error-msg/error-msg.component';
import { Router } from '@angular/router';
import { ApiService } from './../../../service/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private apiservice:ApiService, private router: Router) { }
  booleanExibir=true;
  booleanExibirRetorno=false;
  usuario="";
  pegatoken="";
  lista=[];
  listaDisplayName=[];



  ngOnInit(): void {
    this.verificaToken();
  }

  atualiza(){

    this.pesquisa_usuario()

  }

  verificaToken(){
    this.apiservice.verificaToken(this.pegaToken()).subscribe(
      (retorno)=> {this.trataRetornoToken(retorno)},
      ()=>this.errorMsgComponent.setError('Falha ao buscar os grupos'),
    );
  }



  pesquisa_usuario(): void{
    this.apiservice.pesquisa_usuario(this.usuario,this.pegaToken()).subscribe(
   dados => {this.tratamento(dados)},
   ()=>this.errorMsgComponent.setError('Falha na comunicação com a api!'),
 );

}

  trataRetornoToken(r){
    if(r['Status']=='Acesso concedido' ){
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


tratamento(d):void {

  if (d['Status']=="nao encontrado"){
    this.errorMsgComponent.setError("Usuario nao encontrado verifique o campo digitado e tente novamente");
    this.lista=d[''];
    this.listaDisplayName=d[''];
  }

  else if (d['Status']=="ok"){
    this.lista=d['Nome']
    this.listaDisplayName=d['DisplayName']
  }




}


pegaToken(){

  this.pegatoken=localStorage.getItem('Token');
  return this.pegatoken

}
}
