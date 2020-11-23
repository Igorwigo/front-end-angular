import { ApiService } from './../../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {

  constructor(private apiservice:ApiService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.getMemberOF(this.activatedRoute.snapshot.params.nomeUsuario);
   }

  ngOnInit(): void {
  }

  getMemberOF(NomeUsuario){








    
  }












}
