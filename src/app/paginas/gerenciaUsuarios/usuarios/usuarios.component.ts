import { ErrorMsgComponent } from './../../../compartilhado/error-msg/error-msg.component';
import { Router } from '@angular/router';
import { ApiService } from './../../../service/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private loginService: ApiService, private router: Router) { }
  booleanExibir=true;
  booleanExibirRetorno=false;
  usuario=""

  lista=[]
  listaDisplayName=[]



  ngOnInit(): void {
  }

  atualiza(){

    this.pesquisa_usuario()

  }

  pesquisa_usuario(): void{
    this.loginService.pesquisa_usuario(this.usuario).subscribe(
   dados => {this.tratamento(dados)},
 );




}

tratamento(d):void {

  if (d['Status']=="nao encontrado"){
    this.errorMsgComponent.setError("Usuario nao encontrado verifique o campo digitado e tente novamente");
  }

  if (d['Status']=="ok"){
    this.lista=d['Nome']
    this.listaDisplayName=d['DisplayName']
  }

/* 
   if (d['Status']=="ok"){
     localStorage.clear();
     console.log("Login autorizado");
     localStorage.setItem('Token', d['Token']);
     this.router.navigate(['/protected/MainMenu']);
   }

 else if (d['Status']=="Credenciais inválidas"){
   this.errorMsgComponent.setError('Credenciais invalidas!!!');

 }
 else if (d['Status']=="Apenas usuarios ADMs sao permitidos"){
   this.errorMsgComponent.setError('Apenas ADMs sao permitidos!!!');

 }
**/
}
}
