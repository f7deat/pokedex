import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
    ) {  }

    pokemon: any = [];
    icon: string;
    activeClass = 1;
    getPokemon(): void {
      this.pokemonService.getPokemon(this.route.snapshot.params['id']).subscribe(
        (x) => {
          this.pokemon = x;
        }
      );
    }
    changeSprite(spriteName: string): void {
      if (spriteName === 'front_default') {
        this.icon = this.pokemon.sprites.front_default;
        this.activeClass = 1;
      } else if (spriteName === 'back_default') {
        this.icon = this.pokemon.sprites.back_default;
        this.activeClass = 2;
      } else if (spriteName === 'front_female') {
        this.icon = this.pokemon.sprites.front_female;
        this.activeClass = 3;
      } else if (spriteName === 'back_female') {
        this.icon = this.pokemon.sprites.back_female;
        this.activeClass = 4;
      } else if (spriteName === 'front_shiny') {
        this.icon = this.pokemon.sprites.front_shiny;
        this.activeClass = 5;
      } else if (spriteName === 'back_shiny') {
        this.icon = this.pokemon.sprites.back_shiny;
        this.activeClass = 6;
      } else if (spriteName === 'front_shiny_female') {
        this.icon = this.pokemon.sprites.front_shiny_female;
        this.activeClass = 7;
      } else if (spriteName === 'back_shiny_female') {
        this.icon = this.pokemon.sprites.back_shiny_female;
        this.activeClass = 8;
      } else {
        this.icon = null;
      }
    }


  ngOnInit() {
    this.getPokemon();
  }

}
