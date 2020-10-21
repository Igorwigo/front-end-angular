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

  ngOnInit(): void {

    this.get_todos_banco();
  }



  get_todos_banco(){
    this.apiservice.get_todos_grupos().subscribe(
      retorno => {this.lista_todos(retorno)},
      ()=>this.errorMsgComponent.setError('Falha ao buscar os grupos'),
    );

  }


  lista_todos(r){
    if (r["Status"]=="Banco vazio"){
      this.errorMsgComponent.setError('Nao tem grupos para exibir');

    }
    else{

      this.listaNome=r["Nomes"];
      this.listaDescricao=r["Descricoes"];
      
  
    }

  }

  deleta_do_banco(nome){
    this.apiservice.deleta_grupo_banco(nome).subscribe(
      () => { this.get_todos_banco()},
    );

  }
}
