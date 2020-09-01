import { Component, OnInit } from '@angular/core';
import Results from 'src/models/Results';
import Pokedex from 'src/models/Pokedex';
import PokemonService from '../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons: Results[];

  constructor(private pokemonService: PokemonService) { }
  getHomeData(): void {
    this.pokemonService.getPokedex().subscribe(
      (x: Pokedex) => {
        this.pokemons = x.results;
      }
    );
  }

  ngOnInit() {
    this.getHomeData();
  }

}
