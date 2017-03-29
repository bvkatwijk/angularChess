import { Component, OnInit } from '@angular/core';
import { PieceType } from "./piece-type.enum";
import { Color } from "../player/color.enum";
import { Piece } from "./piece";

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

  piece: Piece;
  dragHandle = ':not(.none)';

  ngOnInit() {
    this.piece = Piece.randomPiece();
  }

  onItemDrop(e: any) {
    console.log(e.nativeEvent.srcElement.className);
    this.piece = e.dragData;
  }

  onDragStart(e: any) {
    console.log(e);
    console.log('drag started');
  }

  removePiece() {
    this.piece = new Piece(PieceType.NONE, Color.NONE);
  }

}
