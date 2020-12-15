import { ApiService } from './../../service/api.service';
import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  sitekey: string;

  constructor(private loginService: ApiService, private router: Router) { 
    this.sitekey='6LcEMf0ZAAAAAIfZ1ZprWizHeQDhPHHURt5lLENo';

  }

  usuario = '';
  senha = '';

 
ngOnInit(){

  this.logout();


}
  logar(): void{
       this.loginService.postLogin(this.usuario, this.senha).subscribe(
      dados => {this.tratamento(dados)},
      ()=>this.errorMsgComponent.setError('Falha! tente novamente mais tarde'),
    );




  }

  tratamento(d):void {


      if (d['Status']=="ok"){
        localStorage.clear();
        console.log("Login autorizado");
        localStorage.setItem('Token', d['Token']);
        localStorage.setItem('1 acesso', "sim");
        this.router.navigate(['/protected/MainMenu']);
      }

    else if (d['Status']=="Credenciais inválidas"){
      this.errorMsgComponent.setError('Credenciais invalidas!!!');

    }
    else if (d['Status']=="Apenas usuarios ADMs sao permitidos"){
      this.errorMsgComponent.setError('Apenas ADMs sao permitidos!!!');

    }

}


logout(): void {
  localStorage.removeItem('Token');
}


}

