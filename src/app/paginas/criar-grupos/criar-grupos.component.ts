import { ApiService } from './../../service/api.service';
import { Router } from '@angular/router';
import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-criar-grupos',
  templateUrl: './criar-grupos.component.html',
  styleUrls: ['./criar-grupos.component.css']
})
export class CriarGruposComponent {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  nome = "";
  descricao="";
  nome_no_ad ="";

  constructor(private apiservice: ApiService,private router: Router) { }

  criaGrupo(){  

    this.apiservice.criaGrupo(this.nome, this.descricao, this.nome_no_ad).subscribe(
      (retorno)=> {this.tratamento(retorno)},
    );
    }



    tratamento(r){

      if (r["Status"]=="Ocorreu um erro ao inserir"){

        this.errorMsgComponent.setError('Falha ao criar o Grupo verifique o nome e tente novamente')
      }

      else if(r["Status"]=="Grupo Criado"){
        this.router.navigate(['/protected/grupos'])

      }

    }

    logout(): void {
      localStorage.removeItem('Token');
      this.router.navigate(['/login']);
    }

}
