import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HomeComponent } from './home/home.component';
import { AbilityComponent } from './ability/ability.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import AbilityDetailsComponent from './ability/ability-details.component';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: 'ability', component: AbilityComponent },
  { path: 'ability/details/:id', component: AbilityDetailsComponent },
  { path: 'type', component: TypeComponent },
  { path: 'type/:id', component: PokemonTypeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
