import { Router } from '@angular/router';
import { Component,  } from '@angular/core';

@Component({
  selector: 'app-menu-base-template',
  templateUrl: './menu-base-template.component.html',
  styleUrls: ['./menu-base-template.component.css']
})
export class MenuBaseTemplateComponent  {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.removeItem('Token');
    this.router.navigate(['/login']);
  }

}
