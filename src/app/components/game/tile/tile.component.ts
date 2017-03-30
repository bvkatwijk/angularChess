import { Piece } from '../piece/piece';
import { Input, Component, OnInit } from '@angular/core';
import { Tile } from "./tile";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
  host: {
    '(dragover)': 'onDragOver($event)',
  }
})
export class TileComponent implements OnInit {

  @Input() tile: Tile;

  background_color: string;

  constructor() { }

  ngOnInit() {
    this.background_color = (Math.floor(this.tile.index / 8) + this.tile.index) % 2 == 0 ? 'light' : 'dark';
  }

  /**
   * Set as valid drop target
   * @param e event
   */
  onDragOver(e: any) {
    e.preventDefault();
  }

}
