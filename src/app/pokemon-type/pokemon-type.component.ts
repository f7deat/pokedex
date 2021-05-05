import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonType } from 'src/models/PokemonType';
import PokemonTypeService from '../pokemon-type.service';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.css']
})
export class PokemonTypeComponent implements OnInit {

  pokemonType : PokemonType;

  constructor(private pokemonTypeService: PokemonTypeService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.pokemonTypeService.getPokemonType(id).subscribe((response: PokemonType) => {
      this.pokemonType = response;
      console.log(this.pokemonType)
    })
  }

}
