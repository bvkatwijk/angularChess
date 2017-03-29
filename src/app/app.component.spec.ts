import { PieceComponent } from './components/game/piece/piece.component';
import { ContainerComponent } from './components/game/container/container.component';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BoardComponent } from "./components/game/board/board.component";
import { TileComponent } from "./components/game/tile/tile.component";

describe('AppComponent', () => {
  var app;
  var component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        ContainerComponent,
        BoardComponent,
        TileComponent,
        PieceComponent
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    component = fixture.debugElement.nativeElement;
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    expect(app.title).toEqual('app works!');
  }));

  it('should have a game container element', async(() => {
    expect(component.querySelector('app-container')).not.toBeNull();
  }));

});
