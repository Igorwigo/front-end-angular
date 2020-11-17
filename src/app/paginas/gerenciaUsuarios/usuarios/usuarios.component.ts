import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor() { }
  booleanExibir=true;
  booleanExibirRetorno=false;

  ngOnInit(): void {
  }

  atualiza(){

    console.log("Atualizado")

  }


}
