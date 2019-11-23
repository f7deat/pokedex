import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Pokemon } from 'src/models/Pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home: any = [];
  constructor(private homeService: HomeService) { }
  getHomeData(): void {
    this.homeService.listPokedex().subscribe(
      (x) => {
        this.home = x;
      }
    );
  }

  ngOnInit() {
    this.getHomeData();
  }

}
