import { Input, Component,  OnInit } from '@angular/core';

const light = '#ffffff';
const dark = '#666666';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() index: number;

  background_color: string;
  
  constructor() { }

  ngOnInit() {
    this.background_color = (Math.floor(this.index / 8) + this.index) % 2 == 0 ? light : dark;
  }

}
