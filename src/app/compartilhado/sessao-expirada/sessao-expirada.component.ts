import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessao-expirada',
  templateUrl: './sessao-expirada.component.html',
  styleUrls: ['./sessao-expirada.component.css']
})
export class SessaoExpiradaComponent {

  constructor(private router: Router) { }

  logout(): void {
    localStorage.removeItem('Token');
    this.router.navigate(['/login']);
  }

}
