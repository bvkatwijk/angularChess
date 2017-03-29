import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/game/container/container.component';
import { BoardComponent } from './components/game/board/board.component';
import { TileComponent } from './components/game/tile/tile.component';
import { PieceComponent } from './components/game/piece/piece.component';
import { PlayerComponent } from './components/game/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    BoardComponent,
    TileComponent,
    PieceComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
