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
    getPokemon(): void {
      this.pokemonService.getPokemon(this.route.snapshot.params['id']).subscribe(
        (x) => {
          this.pokemon = x;
        }
      );
    }


  ngOnInit() {
    this.getPokemon();
  }

}
