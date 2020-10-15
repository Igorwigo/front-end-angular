import { ApiService } from './../../service/api.service';
import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private loginService: ApiService) { }

  usuario = '';
  senha = '';

 

  logar(): void{

    this.loginService.postLogin(this.usuario, this.senha).subscribe(
      dados => {this.tratamento(dados)},
    );




  }

  tratamento(d):void {


      if (d['Status']=="ok"){

        console.log("Login autorizado");
      }

    else if (d['Status']=="Credenciais inválidas"){
      this.errorMsgComponent.setError('Credenciais invalidas!!!');

    }


}
}
