import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent{

  constructor(private router: Router) { }


  logout(): void {
    localStorage.removeItem('Token');
    this.router.navigate(['/login']);
  }
}
