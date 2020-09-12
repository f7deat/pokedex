import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'pokemon-name',
    templateUrl: './pokemon-name.component.html',
    styleUrls: []
  })
export class PokemonNameComponent implements OnInit {
    @Input() type: string;
    
    ngOnInit(): void {
        
    }

  }
