import { Component, OnInit } from '@angular/core';
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
    this.selectedPokemon(name);
  }

  getPokemonById(id: number): void {
    this.pokemonService.getPokemonById(id).subscribe(
      (x: Pokemon) => {
        this.pokemon = x;
        this.artWork = x.sprites.other["official-artwork"].front_default;
      }
    )
  }

  selectedPokemon(name: string): void {
    this.pokemon = this.pokemons.find(x=>x.name === name);
  }

  getPokemonByName(name: string): void {
    this.pokemonService.getPokemonByName(name).subscribe(
      (x: Pokemon) => {
        this.pokemon = x;
        this.artWork = x.sprites.other["official-artwork"].front_default;
      }
    )
  }

  ngOnInit() {
    this.getHomeData();
    this.getPokemonById(1);
  }

}
