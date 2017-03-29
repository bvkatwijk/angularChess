import { PieceType } from "./piece-type.enum";
import { Color } from "../player/color.enum";

export class Piece {

    constructor(public type: PieceType, public color: Color) { }

  static randomPieceType() {
    const types: PieceType[] = [
        PieceType.KING,
        PieceType.QUEEN,
        PieceType.ROOK,
        PieceType.BISHOP,
        PieceType.KNIGHT,
        PieceType.PAWN,
        PieceType.NONE
    ];
    return types[Math.floor(Math.random() * types.length)];
  }

  static randomPiece(): Piece {
      return new Piece(this.randomPieceType(), this.randomPieceColor())
  }

  static randomPieceColor(): Color {
      const types: Color[] = [
        Color.WHITE,
        Color.BLACK
    ];
    return types[Math.floor(Math.random() * types.length)];
  }

}