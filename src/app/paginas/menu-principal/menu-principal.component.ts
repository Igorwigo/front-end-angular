import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { ApiService } from './../../service/api.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private apiservice: ApiService,private router: Router, config: NgbModalConfig,private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;

   }

  booleanExibir=false;
  booleanExibirRetorno=false;
  pegatoken="";
  acesso="";

  ngOnInit(): void {
    
    this.apiservice.verificaToken(this.pegaToken).subscribe(
     retorno => {this.permiteExibir(retorno)},
   );

    
  }

  open(content) {
    this.modalService.open(content);
  }

  ir_sistemas(){
    this.router.navigate(['/protected/grupos']);
  }
  ir_usuarios(){
    this.router.navigate(['protected/main/users']);
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

  pegaToken(){

    this.pegatoken=localStorage.getItem('Token');
    return this.pegatoken

  }


}

