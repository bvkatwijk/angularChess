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
    '(dragleave)': 'onDragLeave($event)',
    '(dragenter)': 'onDragEnter($event)',
    '(drop)': 'onDrop($event)'
  }
})
export class PieceComponent implements OnInit {

  piece: Piece;

  ngOnInit() {
    this.piece = Piece.randomPiece();
  }

  onItemDrop(e: any) {
    console.log('PieceComponent onItemDrop');
  }

  onDragStart(e: any) {
    console.log('PieceComponent onDragStart');
  }

  onDragEnter(e: any) {
    console.log('PieceComponent onDragEnter');
  }

  onDragLeave(ev: any) {
    console.log('PieceComponent onDragLeave');
  }

  onDrop(ev: any) {
    console.log("PieceComponent onDrop");
  }

  removePiece() {
    this.piece = new Piece(PieceType.NONE, Color.NONE);
  }

  canDrag() {
    return this.piece.type != PieceType.NONE;
  }

}
