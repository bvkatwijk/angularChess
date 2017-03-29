import { Component, OnInit } from '@angular/core';
import { PieceType } from "./piece-type.enum";
import { Color } from "../player/color.enum";
import { Piece } from "./piece";

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css'],
  host: {
    '(dragstart)': 'onDragStart($event)',
    '(dragover)': 'onDragOver($event)',
    '(drop)': 'onDrop($event)'
  }
})
export class PieceComponent implements OnInit {

  piece: Piece;

  ngOnInit() {
    this.piece = Piece.randomPiece();
  }

  onDragStart(e: any) {
    e.dataTransfer.setData("type", this.piece.type);
    e.dataTransfer.setData("color", this.piece.color);
  }

  onDragOver(e: any) {
    e.preventDefault();
  }

  onDrop(e: any) {
    this.piece = new Piece(e.dataTransfer.getData("type"), e.dataTransfer.getData("color"));
  }

  canDrag() {
    return this.piece.type != PieceType.NONE;
  }

}
