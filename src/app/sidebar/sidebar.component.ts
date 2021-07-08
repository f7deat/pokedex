import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _router: Router) { }

  router = this._router;

  routers = [
    {
      url: '/',
      name: 'Home',
      icon: 'bubble_chart'
    },
    {
      url: '/ability',
      name: 'Ability',
      icon: 'bubble_chart'
    },
    {
      url: '/type',
      name: 'Type',
      icon: 'bubble_chart'
    }
  ]

  ngOnInit(): void {
  }

}
