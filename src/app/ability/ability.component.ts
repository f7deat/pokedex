import { Component, OnInit } from '@angular/core';
import { AbilityService } from '../ability.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {

  constructor(private abilityService: AbilityService) { }

  ability: any;
  GetAbility() {
    this.abilityService.ListAbility().subscribe(
      (x) => {
        this.ability = x;
      }
    );
  }
  ngOnInit() {
    this.GetAbility();
  }

}
