import { PieceType } from '../piece/piece-type.enum';
import { Color } from '../player/color.enum';
import { Component, OnInit } from '@angular/core';
import { Tile } from "../tile/tile";
import { Piece } from '../piece/piece';
import { Board } from "./board";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  tiles: Tile[] = [];
  board: Board;

  constructor() {
    this.board = new Board(this.tiles);
  }

  ngOnInit() {
    for(var i = 0; i < 64; i++ ) {
      this.tiles.push(new Tile(i, Piece.randomPiece()));
    }
  }

  private dragged: Tile;

  onDrag(event: any, tile: Tile) {
    this.dragged = tile;
  }

  onDrop(event: any, tile: Tile) {
    //Copy Source to Target
    this.board.tiles[tile.index].piece = this.board.tiles[this.dragged.index].piece;

    //Clear Source
    this.board.tiles[this.dragged.index].piece = new Piece(PieceType.NONE, Color.NONE);
  }

}
