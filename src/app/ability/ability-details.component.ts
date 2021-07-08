import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import PokemonService from '../pokemon.service';

@Component({
  selector: 'app-ability-details',
  templateUrl: './ability-details.component.html',
  styleUrls: ['./ability.component.css']
})
export default class AbilityDetailsComponent implements OnInit {

    ability: any;

    constructor(private pokemonService: PokemonService, private activedRoute: ActivatedRoute) {
        
    }
    ngOnInit(): void {
        this.pokemonService.getAbilityDetail(this.activedRoute.snapshot.params['id']).subscribe(response => {
            this.ability = response;
        })
    }
}