import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokeGridComponent } from './components/pokemon/poke-grid/poke-grid.component';
import { PokeCardComponent } from './components/pokemon/poke-card/poke-card.component';
import { FormatTypePipe } from './pipes/format-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PokemonComponent,
    PokeGridComponent,
    PokeCardComponent,
    FormatTypePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
