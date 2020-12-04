import { ErrorMsgComponent } from './../../../compartilhado/error-msg/error-msg.component';
import { ApiService } from './../../../service/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {
  nome="";
  teste="";
  lista=[];
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private apiservice:ApiService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.get_memberof(this.activatedRoute.snapshot.params.nomeUsuario);
    this.nome=this.activatedRoute.snapshot.params.nomeUsuario;
   }

   ngOnInit(): void {
    
  }

  get_memberof(nomeUsuario){



    this.apiservice.busca_memberof(nomeUsuario).subscribe(
      (retorno)=> {this.trataretorno(retorno)},
      ()=>this.errorMsgComponent.setError('Falha ao buscar os grupo'),
    );
    
  }

  atualizaUsuario(){

    console.log("TESTE")
  }

  trataretorno(r){

    this.lista=r["Lista"]



  }








}
