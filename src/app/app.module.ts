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
import { CamelcasePipe } from './pipes/camelcase.pipe';
import { ThreeDigitPipe } from './pipes/three-digit.pipe';
import { PokePillComponent } from './components/pokemon/poke-pill/poke-pill.component';
import { ColorTypeDirective } from './directives/color-type.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PokemonComponent,
    PokeGridComponent,
    PokeCardComponent,
    FormatTypePipe,
    CamelcasePipe,
    ThreeDigitPipe,
    PokePillComponent,
    ColorTypeDirective
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
