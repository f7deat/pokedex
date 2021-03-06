import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'pokemon-name',
    template: `<a routerLink="/type/{{type}}"><div class="icon {{type}} p-2 mr-2" style="width: 2rem;">
                    <img src="assets/icons/{{type}}.svg"/>
              </div></a>`,
    styleUrls: []
  })
export class PokemonNameComponent implements OnInit {
    @Input() type: string;
    
    ngOnInit(): void {
        
    }

  }
