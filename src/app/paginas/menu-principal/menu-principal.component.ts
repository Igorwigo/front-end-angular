import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { ApiService } from './../../service/api.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private apiservice: ApiService,private router: Router) { }

  public booleanExibir=false;
  public booleanExibirRetorno=false;


  ngOnInit(): void {
    
    this.apiservice.verificaToken(this.pegaToken).subscribe(
     retorno => {this.permiteExibir(retorno)},
   );

    
  }



  pegaToken=localStorage.getItem('Token');
  


  logout(): void {
    localStorage.removeItem('Token');
    this.router.navigate(['/login']);
  }
  ir_sistemas(){
    this.router.navigate(['/protected/grupos']);
  }
  ir_usuarios(){
    //this.router.navigate(['/protected/grupos']);
  }
  permiteExibir(r): void{

    if(r['Status']=='Acesso concedido'){
      console.log("Entoru no acesso")
      this.booleanExibir=true;
      this.booleanExibirRetorno=false;

    }

    else if(r['Status']=='Voce nao tem autorizacao!'){
      console.log("Entoru no sem permissao")
      this.errorMsgComponent.setError('sem permissao!');
      this.booleanExibir=false;
      this.booleanExibirRetorno=true;
    }

    else if(r['Status']=='token invalido'){
      console.log("Token invalido")
      this.errorMsgComponent.setError('Sessao expirada!');
      this.booleanExibir=false;
      this.booleanExibirRetorno=true;
      
    }




  }


}

