import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { PokemonComponent } from './pokemon/pokemon.component';
import PokemonService from './pokemon.service';
import { AbilityComponent } from './ability/ability.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonNameComponent } from './home/pokemon-name.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import PokemonTypeService from './pokemon-type.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import AbilityDetailsComponent from './ability/ability-details.component';
import { TypeComponent } from './type/type.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    AbilityComponent,
    PokemonNameComponent,
    PokemonTypeComponent,
    SidebarComponent,
    AbilityDetailsComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    PokemonService,
    PokemonTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
