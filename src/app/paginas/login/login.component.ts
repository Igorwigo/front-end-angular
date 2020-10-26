import { ApiService } from './../../service/api.service';
import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private loginService: ApiService, private router: Router) { }

  usuario = '';
  senha = '';

 

  logar(): void{
       this.loginService.postLogin(this.usuario, this.senha).subscribe(
      dados => {this.tratamento(dados)},
    );




  }

  tratamento(d):void {


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

}
}

