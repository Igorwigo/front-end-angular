import { ErrorMsgComponent } from './../../../compartilhado/error-msg/error-msg.component';
import { ApiService } from './../../../service/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {
  nome="";
  teste="";
  lista=[];
  booleanExibir=false;
  booleanExibirRetorno=false;
  listaNomeG = [];
  listaDescricaoG=[];


  closeResult: string;
  
  pegatoken="";


  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private apiservice:ApiService, private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {
    this.get_memberof(this.activatedRoute.snapshot.params.nomeUsuario);
    this.nome=this.activatedRoute.snapshot.params.nomeUsuario;
   }

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
  
    if(r['Status']=='Acesso concedido' ){
      this.booleanExibir=true;
      this.booleanExibirRetorno=false;
      this.listaNomeG=r["Nomes"];
      this.listaDescricaoG=r["Descricoes"];
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





  get_memberof(nomeUsuario){



    this.apiservice.busca_memberof(nomeUsuario,this.pegaToken()).subscribe(
      (retorno)=> {this.trataretorno(retorno)},
      ()=>this.errorMsgComponent.setError('Falha ao buscar os grupo'),
    );
    
  }

  atualizaUsuario(){

    console.log("TESTE")
  }

  trataretorno(r){
    if(r['Status']=='ok' ){
      this.booleanExibir=true;
      this.booleanExibirRetorno=false;
      this.lista=r["Lista"]
    }
    else{


    }



  }

  deleta(){

    console.log("DELETADO")
  }

  pegaToken(){

    this.pegatoken=localStorage.getItem('Token');
    return this.pegatoken

  }
  


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }




}
