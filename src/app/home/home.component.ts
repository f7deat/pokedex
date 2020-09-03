import { Component, OnInit } from '@angular/core';
import Results from 'src/models/Results';
import Pokedex from 'src/models/Pokedex';
import PokemonService from '../pokemon.service';
import Pokemon from 'src/models/Pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons: Results[];
  pokemon: Pokemon;
  artWork: string;

  constructor(private pokemonService: PokemonService) { }
  getHomeData(): void {
    this.pokemonService.getPokedex().subscribe(
      (x: Pokedex) => {
        this.pokemons = x.results;
      }
    );
  }

  getPokemon(): void {
    this.pokemonService.getPokemonById(1).subscribe(
      (x: Pokemon) => {
        this.pokemon = x;
        this.artWork = x.sprites.other["official-artwork"].front_default;
      }
    )
  }

  ngOnInit() {
    this.getHomeData();
    this.getPokemon();
  }

}
