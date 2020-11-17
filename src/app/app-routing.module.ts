import { UsuariosComponent } from './paginas/gerenciaUsuarios/usuarios/usuarios.component';
import { EditarGrupoComponent } from './paginas/editar-grupo/editar-grupo.component';
import { CriarGruposComponent } from './paginas/criar-grupos/criar-grupos.component';
import { GruposComponent } from './paginas/grupos/grupos.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './paginas/menu-principal/menu-principal.component';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaNaoEncontradaComponent } from './paginas/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'protected/MainMenu', component: MenuPrincipalComponent},
  {path: 'protected/grupos', component: GruposComponent},
  {path: 'protected/criar/grupo', component: CriarGruposComponent},
  {path: 'protected/editar/grupo/:nome', component: EditarGrupoComponent},
  {path: 'protected/main/users', component: UsuariosComponent},


  

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: '**', component: PaginaNaoEncontradaComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
