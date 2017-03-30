import { Piece } from '../piece/piece';
import { Component, OnInit } from '@angular/core';
import { Board } from "./board";
import { Tile } from "../tile/tile";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  host: {
    '(dragstart)': 'onDragStart($event)',
    '(dragend)': 'onDragEnd($event)',
    '(drop)': 'onDrop($event)'
  }
})
export class BoardComponent {
  board: Board;

  constructor() {
    const tiles: Tile[] = [];
    for(var i = 0; i < 64; i++ ) {
      tiles.push(new Tile(i, Piece.randomPiece()));
    }
    this.board = new Board(tiles);
  }

  onDragStart(e: any) {
    // e.dataTransfer.setData("type", this.piece.type);
    // e.dataTransfer.setData("color", this.piece.color);
  }

  onDragEnd(e: any) {
    // console.log(this.piece.type);
  }

  onDrop(e: any) {
    console.log(e);
    // this.piece = new Piece(e.dataTransfer.getData("type"), e.dataTransfer.getData("color"));
  }

}
