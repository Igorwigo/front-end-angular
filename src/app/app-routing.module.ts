
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './paginas/menu-principal/menu-principal.component';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaNaoEncontradaComponent } from './paginas/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'protected/MainMenu', component: MenuPrincipalComponent},


  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: '**', component: PaginaNaoEncontradaComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
