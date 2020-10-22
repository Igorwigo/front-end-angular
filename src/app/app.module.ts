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
import { TesteComponent } from './teste/teste.component';
import { GruposComponent } from './paginas/grupos/grupos.component';
import { MenuBaseTemplateComponent } from './paginas/menu-base-template/menu-base-template.component';
import { CriarGruposComponent } from './paginas/criar-grupos/criar-grupos.component';
import { EditarGrupoComponent } from './paginas/editar-grupo/editar-grupo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorMsgComponent,
    MenuPrincipalComponent,
    PaginaNaoEncontradaComponent,
    TesteComponent,
    GruposComponent,
    MenuBaseTemplateComponent,
    CriarGruposComponent,
    EditarGrupoComponent,
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
