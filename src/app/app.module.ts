import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home.service';
import { HttpClientModule} from '@angular/common/http';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonService } from './pokemon.service';
import { AbilityComponent } from './ability/ability.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { ToolbarBasicComponent } from './toolbar-basic/toolbar-basic.component';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule } from '@angular/material/icon';
import {MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorBasicComponent } from './paginator-basic/paginator-basic.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    AbilityComponent,
    ToolbarBasicComponent,
    PaginatorBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCardModule
  ],
  providers: [
    HomeService,
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
