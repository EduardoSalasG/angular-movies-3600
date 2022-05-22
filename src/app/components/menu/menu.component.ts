import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items : any[] = [
    {
      url: 'home',
      text: 'Home',
      icon: 'bi-house'
    },
    {
      url: 'mantpeliculas',
      text: 'Mantenedor de Películas',
      icon: 'bi-film'
      
    },
    {
      url: 'about',
      text: 'About',
      icon: 'bi-umbrella'
    },
    {
      url: 'contact',
      text: 'Contact',
      icon: 'bi-telephone'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
