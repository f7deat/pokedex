import { Component, OnInit } from '@angular/core';
import PokemonService from '../pokemon.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  constructor(private pokemonService: PokemonService) {
    
  }

    type: any;

    ngOnInit(): void {
        this.pokemonService.getType().subscribe(response => {
          this.type = response;
          console.log(response)
        })
    }
}