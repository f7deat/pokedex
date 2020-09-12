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
import { ToolbarBasicComponent } from './toolbar-basic/toolbar-basic.component';
import { PokemonNameComponent } from './home/pokemon-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    AbilityComponent,
    ToolbarBasicComponent,
    PokemonNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
