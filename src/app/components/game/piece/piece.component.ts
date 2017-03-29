import { Component, OnInit } from '@angular/core';
import { Piece } from "./piece.enum";

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent {

  piece = this.randomPiece();

  randomPiece() {
    const pieces: Piece[] = [Piece.KING, Piece.QUEEN, Piece.ROOK, Piece.BISHOP, Piece.KNIGHT, Piece.PAWN, Piece.NONE];
    return pieces[Math.floor(Math.random() * pieces.length)];
  }

  pieceClass() {
    return Piece[this.piece]
      .toLowerCase();
  }

}
