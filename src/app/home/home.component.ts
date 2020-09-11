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

  pokemons: Pokemon[] = [];
  pokemon: Pokemon;
  artWork: string;

  constructor(private pokemonService: PokemonService) { }
  getHomeData(): void {
    this.pokemonService.getPokedex().subscribe(
      (x: Pokedex) => {
        x.results.forEach((i) => {
          this.pokemonService.getPokemonByUrl(i.url).subscribe(
            (y: Pokemon) => {
              this.pokemons.push(y)
            }
          )
        });
        console.log(this.pokemons)
      }
    );
  }

  previewPokemon(name: string): void {
    this.artWork = this.pokemons.find(x=>x.name === name).sprites.other["official-artwork"].front_default;
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
