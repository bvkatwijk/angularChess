import { Input, Component,  OnInit } from '@angular/core';
import { PieceType } from "./piece-type.enum";
import { Color } from "../player/color.enum";
import { Piece } from "./piece";

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

  @Input() piece: Piece;

  ngOnInit() { }

}
