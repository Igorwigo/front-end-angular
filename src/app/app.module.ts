import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { MenuPrincipalComponent } from './paginas/menu-principal/menu-principal.component';
import { PaginaNaoEncontradaComponent } from './paginas/pagina-nao-encontrada/pagina-nao-encontrada.component';

import { GruposComponent } from './paginas/grupos/grupos.component';
import { CriarGruposComponent } from './paginas/criar-grupos/criar-grupos.component';
import { EditarGrupoComponent } from './paginas/editar-grupo/editar-grupo.component';
import { NavBarComponent } from './compartilhado/nav-bar/nav-bar.component';
import { FooterComponent } from './compartilhado/footer/footer.component';
import { SessaoExpiradaComponent } from './compartilhado/sessao-expirada/sessao-expirada.component';
import { UsuariosComponent } from './paginas/gerenciaUsuarios/usuarios/usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorMsgComponent,
    MenuPrincipalComponent,
    PaginaNaoEncontradaComponent,
    GruposComponent,
    CriarGruposComponent,
    EditarGrupoComponent,
    NavBarComponent,
    FooterComponent,
    SessaoExpiradaComponent,
    UsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
